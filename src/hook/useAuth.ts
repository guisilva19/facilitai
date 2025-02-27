/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_FACILITAI_API;

interface UserAccount {
  id: string;
  email: string;
  nome: string;
  foto: string;
  telefone: string;
  isPremium: boolean;
}

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const savedToken = getCookie("auth_token");

    if (savedToken) {
      setToken(savedToken);
      const user = await getUser(savedToken);
      setUser(user);
    }
  };

  const getUser = async (token: string) => {
    try {
      setLoadingUser(true);
      const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } finally {
      setLoadingUser(false);
    }
  };

  const login = async (
    email?: string,
    senha?: string,
    google: boolean = false,
    token?: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}/auth${google ? "/google" : ""}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(google ? { token } : { email, senha }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Ops! Login não autorizado!");
      } else {
        toast.success("Login feito com sucesso!");
        router.replace("/dashboard");
      }

      setCookie("auth_token", data.token, 1);
      setToken(data.token);
    } catch (err: any) {
      toast.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    deleteCookie("auth_token");
    setToken(null);
    router.replace("/");
  };

  return { token, login, logout, loading, error, user, loadingUser };
}

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; secure; SameSite=Lax`;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
