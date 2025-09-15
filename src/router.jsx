// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     // <>
//     //   {/* <Route path="/public" element={<SampleComponent />} /> */}
//     //   <Route path="/" element={<InitialRedirect />} />

//     //   <Route element={<Layout />}>
//     //     <Route
//     //       path="/admin/home"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="dashboard"
//     //         >
//     //           <AdminHome />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/dashboard"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="dashboard"
//     //         >
//     //           <AdminDashboard />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/campaigns"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="campaign"
//     //         >
//     //           <AdminCampaigns />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/campaign/details/:id"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="campaign.campaign.view"
//     //         >
//     //           <AdminCampaignDetails />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/campaign/create"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="campaign.campaign.create"
//     //         >
//     //           <AdminCreateCampaigns />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/campaign/edit/:id"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="campaign.campaign.update"
//     //         >
//     //           <AdminCreateCampaigns />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/campaign/launch/:campaignId"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="campaign.campaign.create"
//     //         >
//     //           <Launch />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/admin/settings"
//     //       element={
//     //         <ProtectedRoute
//     //           allowedRole={["admin"]}
//     //           requiredPermission="settings"
//     //         >
//     //           <AdminSettings />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route path="/admin/invalid-access" element={<AdminInvalidAccess />} />
//     //   </Route>

//     //   <Route element={<TmLayout />}>
//     //     <Route
//     //       path="/tm/dashboard"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm", "asm", "rsm"]}>
//     //           <TmDashboard />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/tm/profile/:id"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm", "asm", "rsm"]}>
//     //           <TmProfileSubmission />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/tm/profile"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm", "asm", "rsm"]}>
//     //           <TmProfile />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/tm/image-upload"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm", "asm", "rsm"]}>
//     //           <TmImageUpload />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     <Route
//     //       path="/tm/campaigns/:id"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm", "asm", "rsm"]}>
//     //           <CampaignContainer />
//     //         </ProtectedRoute>
//     //       }
//     //     />
//     //     {/* <Route
//     //       path="/tm/privacy-policy"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm","asm","rsm"]}>
//     //           <TmPrivacyPolicy />
//     //         </ProtectedRoute>
//     //       }
//     //     />

//     //     <Route
//     //       path="/tm/terms-and-conditions"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm","asm","rsm"]}>
//     //           <TmTermsAndConditions />
//     //         </ProtectedRoute>
//     //       }
//     //     /> */}
//     //     <Route path="/tm/pages/:page" element={<PagesContainer />} />
//     //   </Route>

//     //   <Route
//     //     path="/tm/invalid-access"
//     //     element={
//     //       <ProtectedRoute allowedRole={["tm", "asm", "rsm", "admin"]}>
//     //         <TmInvalidAccess />
//     //       </ProtectedRoute>
//     //     }
//     //   />

//     //   <Route
//     //     path="/tm/page-not-found"
//     //     element={
//     //       <ProtectedRoute allowedRole={["tm", "asm", "rsm", "admin"]}>
//     //         <PageNotFound />
//     //       </ProtectedRoute>
//     //     }
//     //   />

//     //   <Route path="/pub" element={<PublicCampaignLayout />}>
//     //     <Route
//     //       index
//     //       element={<PublicPageNotFound showFooterHeader={false} />}
//     //     />
//     //     <Route
//     //       path="/pub/campaigns/:id"
//     //       element={<PublicCampaignContainer />}
//     //     />

//     //     {/* <Route path="/pub/campaign/:campaignId" element={<HomePage />} />

//     //     <Route path="/pub/start-page" element={<StartPage />} />

//     //     <Route path="/pub/image-upload" element={<TmImageUpload />} />

//     //     <Route path="/pub/form-fields" element={<PublicCampaignFormPage />} />

//     //     <Route path="/pub/preview-image" element={<PreviewImage />} /> */}

//     //     {/* <Route
//     //       path="/tm/privacy-policy"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm"]}>
//     //           <TmPrivacyPolicy />
//     //         </ProtectedRoute>
//     //       }
//     //     />

//     //     <Route
//     //       path="/tm/terms-and-conditions"
//     //       element={
//     //         <ProtectedRoute allowedRole={["tm"]}>
//     //           <TmTermsAndConditions />
//     //         </ProtectedRoute>
//     //       }
//     //     /> */}
//     //     {/* <Route
//     //       path="/pub/pages/:page"
//     //       element={<PublicCampaignPagesContainer />}
//     //     /> */}
//     //     <Route path="/pub/pages/:page" element={<PublicPagesContainer />} />
//     //     <Route
//     //       path="*"
//     //       element={<PublicPageNotFound showFooterHeader={false} />}
//     //     />
//     //   </Route>

//     //   <Route path="/pub/page-not-found" element={<PublicPageNotFound />} />

//     //   <Route path="/not-authorized" element={<Unauthorized />} />
//     //   <Route path="/get-image" element={<ImageRender />} />
//     //   <Route path="*" element={<Navigate to="/" replace />} />
//     // </>
//   )
// );
