// src/routes/ProtectedRoute.jsx
// import React, { useMemo, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useMsal } from "@azure/msal-react";
// import { InteractionStatus } from "@azure/msal-browser";
// import { LocalStorage_key } from "./service/localStorage";
// import { _doDecrypt } from "./utils/utility";
// import LogoLoader from "./core/components/Loader/LogoLoader";
// import { usePermissions } from "./hooks/usePermissions";

const ProtectedRoute = ({ allowedRole = [], children, requiredPermission }) => {
//   const { instance, inProgress } = useMsal();
//   const activeAccount = instance.getActiveAccount();
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

//   const userType = localStorage.getItem(LocalStorage_key.user_type)
//     ? _doDecrypt(localStorage.getItem(LocalStorage_key.user_type))
//     : null;

//   const permissions = useMemo(() => {
//     const encrypted = localStorage.getItem(LocalStorage_key.permission);
//     return encrypted ? JSON.parse(_doDecrypt(encrypted)) : null;
//   }, []);

//   const { has } = usePermissions(permissions?.modules);

//   if (inProgress !== InteractionStatus.None) {
//     return <LogoLoader />;
//   }

//   if (!activeAccount) {
//     return <Navigate to="/" replace />;
//   }

//   const allowedRolesArray = userAllowedForParticipation
//     ? [...(Array.isArray(allowedRole) ? allowedRole : [allowedRole]), "admin"]
//     : Array.isArray(allowedRole)
//     ? [...allowedRole]
//     : [allowedRole];

//   if (!allowedRolesArray.includes(userType?.toLowerCase())) {
//     return <Navigate to="/not-authorized" replace />;
//   }

//   if (requiredPermission && !has(requiredPermission)) {
//     return <Navigate to="/admin/invalid-access" replace />;
//   }

//   return children;
};

export default ProtectedRoute;
