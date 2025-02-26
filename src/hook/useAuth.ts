/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_FACILITAI_API;

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedToken = getCookie("auth_token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

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

  return { token, login, logout, loading, error };
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
