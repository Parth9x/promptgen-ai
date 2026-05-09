import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Toast({ message, visible }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      const t = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.08))",
        border: "1px solid rgba(16,185,129,0.35)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        animation: visible ? "toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards" : "toastOut 0.3s ease forwards",
      }}>
      <CheckCircle size={18} style={{ color: "#10b981", flexShrink: 0 }} />
      <span style={{ color: "#d1fae5", fontSize: "14px", fontWeight: 500 }}>{message}</span>
      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes toastOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
