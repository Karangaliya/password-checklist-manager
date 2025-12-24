import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { useTypewriter } from "../../hooks/useTypewriter";
import { _Encrypt } from "../../utils/utility";

const LandingPage = () => {
  const navigate = useNavigate();
  const typedText = useTypewriter([
    "credentials",
    "checklists",
    "team workflows",
    "secure access",
  ]);

  return (
    <div style={{ backgroundColor: "var(--vc-app-bg)" }}>
      <section className="relative min-h-screen px-6 flex items-center overflow-hidden">
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-purple-500/20 blur-[140px]" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="text-white fade-up">
            <img src="/logo1.png" alt="VaultCheck" className="w-[450px] mb-8" />
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Secure access to
              <br />
              <span style={{ color: "var(--vc-primary)" }}>{typedText}</span>
              <span className="cursor" />
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-xl fade-up fade-delay-2">
              VaultCheck helps teams manage credentials and workflows securely
              with role-based access, encryption, and full visibility.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/login?mode=${_Encrypt("register")}`)}
                className="px-8 py-3 rounded-full font-semibold text-white transition hover:scale-[1.05] cursor-pointer cta-glow"
                style={{ backgroundColor: "var(--vc-primary)" }}
              >
                Get Started
              </button>
              <button
                onClick={() => navigate(`/login?mode=${_Encrypt("login")}`)}
                className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
          <img
            src="/assets/security.svg"
            alt="Security Illustration"
            className="w-full max-w-md float"
          />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { label: "Security-First by Design", icon: "🛡️" },
            { label: "Built for Teams & Organizations", icon: "🏢" },
            { label: "Granular Access Control", icon: "🔑" },
            { label: "Visibility & Accountability", icon: "👁️" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition"
              style={{
                color: "#374151",
                background: "linear-gradient(180deg, #ffffff, #f9fafb)",
                border: "1px solid #E5E7EB",
              }}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-14 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Everything you need to work securely
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            VaultCheck combines structured workflows with secure credential
            management — designed for real teams and organizations.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-white/10 backdrop-blur rounded-3xl p-8 text-white bento-card fade-up fade-delay-1">
            <img
              src="/assets/checklist.svg"
              className="h-36 mb-6"
              alt="Checklists"
            />
            <h3 className="text-2xl font-bold mb-2">Smart Checklists</h3>
            <p className="text-white/80">
              Create public or private checklists, assign tasks, and track
              progress across teams and projects.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 text-white bento-card fade-up fade-delay-1">
            <img src="/assets/teamwork.svg" className="h-24 mb-4" alt="Teams" />
            <h4 className="font-semibold mb-1">Team Access</h4>
            <p className="text-sm text-white/80">
              Control who can view, edit, or manage.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 text-white bento-card fade-up fade-delay-1">
            <img
              src="/assets/security.svg"
              className="h-24 mb-4"
              alt="Security"
            />
            <h4 className="font-semibold mb-1">Credential Vault</h4>
            <p className="text-sm text-white/80">
              Encrypted storage with permissions.
            </p>
          </div>
          <div className="md:col-span-2 bg-white/10 backdrop-blur rounded-3xl p-6 text-white bento-card fade-up fade-delay-1">
            <img
              src="/assets/analytics.svg"
              className="h-24 mb-4"
              alt="Audit Logs"
            />
            <h4 className="font-semibold mb-1">Audit & Visibility</h4>
            <p className="text-sm text-white/80">
              Track access, changes, and activity with full transparency.
            </p>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 text-center fade-up">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Security is not a feature.
          <br />
          It’s the foundation.
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          VaultCheck is built from the ground up with encryption, RBAC, and
          auditability — so your data stays protected at every level.
        </p>
      </section>
      <section className="bg-white py-28 text-center px-6">
        <h2 className="text-3xl font-extrabold mb-4">
          Start Using VaultCheck Today
        </h2>

        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Take control of credentials and workflows with confidence.
        </p>
        <button
          onClick={() => navigate(`/login?mode=${_Encrypt("register")}`)}
          className="px-10 py-3 rounded-full font-semibold text-white transition hover:scale-[1.05]"
          style={{ backgroundColor: "var(--vc-primary)" }}
        >
          Create Free Account
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
