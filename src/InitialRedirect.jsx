// src/routes/InitialRedirect.jsx
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { _doDecrypt } from "./utils/utility";
// import { LocalStorage_key, SessionStorage_key } from "./service/localStorage";
// import LogoLoader from "./core/components/Loader/LogoLoader";
// import { usePermissions } from "./hooks/usePermissions";

const InitialRedirect = () => {
//   const user = useSelector((state) => state.auth.data);
//   const [userType, setUserType] = useState(null);
//   const [userAllowedForParticipation, setUserAllowedForParticipation] =
//     useState(() => {
//       try {
//         const stored = localStorage.getItem(
//           LocalStorage_key.userAllowedForParticipation
//         );
//         return stored ? JSON.parse(_doDecrypt(stored)) : false;
//       } catch {
//         return false;
//       }
//     });

//   const permissionRouteMap = {
//     dashboard: "/admin/dashboard",
//     campaign: "/admin/campaigns",
//     settings: "/admin/settings",
//   };
//   const encrypted = localStorage.getItem(LocalStorage_key.permission);
//   const permissions = encrypted ? JSON.parse(_doDecrypt(encrypted)) : null;
//   const { has } = usePermissions(permissions?.modules);

//   let url = "/tm/dashboard";
//   useEffect(() => {
//     user &&
//       Object.keys(user).length > 0 &&
//       user?.authorized === false &&
//       setUserType("unauthorized");
//     if (user?.userType) {
//       setUserType(user.userType.toLowerCase());
//     } else {
//       const encrypted = localStorage.getItem(LocalStorage_key.user_type);
//       if (encrypted) {
//         try {
//           const decrypted = _doDecrypt(encrypted)?.trim();
//           setUserType(decrypted?.toLowerCase() || "unauthorized");
//         } catch (err) {
//           console.error("Decryption error:", err);
//         }
//       }
//     }
//   }, [user]);

//   if (!userType) {
//     return <LogoLoader />; // Or a proper loader/spinner
//   }

//   if (userType === "admin") {
//     const currentUrl = sessionStorage.getItem(
//       SessionStorage_key.campaign_url_path
//     )
//       ? sessionStorage.getItem(SessionStorage_key.campaign_url_path)
//       : null;

//     if (currentUrl && userAllowedForParticipation) {
//       url = _doDecrypt(currentUrl) || "";
//       setTimeout(() => {
//         sessionStorage.removeItem(SessionStorage_key.campaign_url_path);
//       }, 100);
//       return <Navigate to={url} replace />;
//     }

//     if (permissions?.modules?.length) {
//       for (const key of Object.keys(permissionRouteMap)) {
//         if (has(key)) {
//           return <Navigate to={permissionRouteMap[key]} replace />;
//         }
//       }
//     }
//     // fallback for admin if no permissions matched
//     return <Navigate to="/admin/dashboard" replace />;
//   } else if (userType === "tm" || userType === "rsm" || userType === "asm") {
//     // return <Navigate to="/tm/dashboard" replace />;
//     const currentUrl = sessionStorage.getItem(
//       SessionStorage_key.campaign_url_path
//     )
//       ? sessionStorage.getItem(SessionStorage_key.campaign_url_path)
//       : null;

//     if (currentUrl) {
//       url = _doDecrypt(currentUrl) || "";
//       setTimeout(() => {
//         sessionStorage.removeItem(SessionStorage_key.campaign_url_path);
//       }, 100);
//     }

//     return <Navigate to={url} replace />;
//   } else {
//     return <Navigate to="/not-authorized" replace />;
//   }

    return null;
};

export default InitialRedirect;
