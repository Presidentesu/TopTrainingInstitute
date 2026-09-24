module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/courses/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesPage,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/firestore.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$courses$2f$CoursesCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LoadingSpinner.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Course Catalog | Practical Training Programs",
    description: "Explore our complete multidisciplinary catalog of practical courses in software development, languages, graphic design, video editing, accounting, and engineering software."
};
const revalidate = 60;
async function CoursesPage() {
    const courses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedCourses"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-20 border-b border-blue-900/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-semibold uppercase tracking-wider",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-3.5 h-3.5 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Comprehensive Curriculum"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl font-extrabold tracking-tight text-white",
                            children: "Course Catalog"
                        }, void 0, false, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed",
                            children: "Browse our career-focused courses across technology, creative arts, business software, and engineering. Select a program to view curriculum details and schedules."
                        }, void 0, false, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        size: "lg",
                        text: "Loading course catalog..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 41,
                        columnNumber: 29
                    }, this),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$courses$2f$CoursesCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CoursesCatalogClient"], {
                        initialCourses: courses
                    }, void 0, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/courses/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/courses/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/courses/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoursesCatalogClient",
    ()=>CoursesCatalogClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CoursesCatalogClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CoursesCatalogClient() from the server but CoursesCatalogClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/courses/CoursesCatalogClient.tsx", "CoursesCatalogClient");
}),
"[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoursesCatalogClient",
    ()=>CoursesCatalogClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CoursesCatalogClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CoursesCatalogClient() from the server but CoursesCatalogClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/courses/CoursesCatalogClient.tsx <module evaluation>", "CoursesCatalogClient");
}),
"[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$courses$2f$CoursesCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$courses$2f$CoursesCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/courses/CoursesCatalogClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$courses$2f$CoursesCatalogClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/LoadingSpinner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-rsc] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
function LoadingSpinner({ size = "md", text = "Loading courses...", className }) {
    const sizeClasses = {
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-12 text-center", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("animate-spin text-blue-600 mb-3", sizeClasses[size])
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoadingSpinner.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-slate-600",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoadingSpinner.tsx",
                lineNumber: 25,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/LoadingSpinner.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/fallback-courses.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_COURSES",
    ()=>FALLBACK_COURSES
]);
const FALLBACK_COURSES = [
    // 1. Full-Stack Web Development
    {
        id: "fs-web-dev",
        title: "Full-Stack Website Development",
        slug: "full-stack-website-development",
        category: "Full-Stack Website Development",
        categorySlug: "full-stack-web-development",
        shortDescription: "Build modern, responsive, database-driven web applications from frontend user interfaces to cloud-deployed backends.",
        description: "Our comprehensive Full-Stack Website Development program equips students with the practical skills needed to design, develop, test, and deploy production-ready web applications. Beginning with modern HTML5, CSS3, and JavaScript essentials, the course progresses into TypeScript, React, Next.js, REST APIs, relational and NoSQL databases, Git collaboration, and Firebase deployment. Throughout the course, students build real-world portfolio projects solving practical business problems.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        duration: "16 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid",
            "Online"
        ],
        modules: [
            "Module 1: Semantic HTML5, CSS3 Modern Layouts & Flexbox/Grid",
            "Module 2: JavaScript Fundamentals, DOM Manipulation & ES6+ Syntax",
            "Module 3: Modern TypeScript for Reliable Web Architecture",
            "Module 4: React Components, State Management, Hooks & Lifecycle",
            "Module 5: Next.js App Router, Server Components & Dynamic Routing",
            "Module 6: Backend Node.js, Express & RESTful API Design",
            "Module 7: Database Management with PostgreSQL, MongoDB & Cloud Firestore",
            "Module 8: Authentication, Security & Firebase Integration",
            "Module 9: Git, GitHub Collaboration, CI/CD & Cloud Deployment",
            "Module 10: Capstone Project: End-to-End Production Web Application"
        ],
        learningOutcomes: [
            "Design and code clean, responsive, accessible web interfaces",
            "Build dynamic user experiences using React and Next.js App Router",
            "Develop robust backend services and REST APIs with Node.js",
            "Connect and query relational and NoSQL databases effectively",
            "Implement secure user authentication and cloud storage with Firebase",
            "Manage source code with Git and deploy production web applications"
        ],
        requirements: [
            "Basic computer literacy and file management skills",
            "A laptop or desktop computer with internet access",
            "No prior coding experience required; enthusiasm to learn is essential"
        ],
        schedule: "Weekday Evenings or Weekend Batches Available",
        fee: 450,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-01-15T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 2. Python Programming
    {
        id: "prog-python",
        title: "Python Programming & Software Fundamentals",
        slug: "python-programming-software-fundamentals",
        category: "Programming Languages",
        categorySlug: "programming-languages",
        shortDescription: "Learn core programming logic, data structures, object-oriented principles, and automation scripts using Python.",
        description: "This course introduces students to Python, one of the world's most versatile and widely-used programming languages. Designed for beginners as well as professionals looking to automate repetitive tasks, the course covers fundamental programming constructs, control flow, functions, object-oriented design, file handling, and external API integration.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        duration: "10 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Online"
        ],
        modules: [
            "Module 1: Getting Started with Python & Development Environment Setup",
            "Module 2: Variables, Data Types, Operators & Expressions",
            "Module 3: Conditional Logic, Loops & Control Structures",
            "Module 4: Functions, Scope, Modules & Package Management",
            "Module 5: Data Structures: Lists, Tuples, Dictionaries & Sets",
            "Module 6: File Input/Output & Working with JSON/CSV Data",
            "Module 7: Object-Oriented Programming (OOP): Classes & Objects",
            "Module 8: Error Handling, Debugging & Writing Unit Tests",
            "Module 9: Web Scraping & Practical Automation Scripts",
            "Module 10: Final Practical Project: Real-World Software Utility"
        ],
        learningOutcomes: [
            "Write clean, idiomatic, readable Python code",
            "Solve algorithmic problems using core data structures",
            "Construct modular programs using Object-Oriented principles",
            "Automate repetitive daily computer tasks and data processing",
            "Build a portfolio-worthy utility project"
        ],
        requirements: [
            "Basic computer usage skills",
            "Personal computer capable of running Python 3 and VS Code"
        ],
        schedule: "Saturday & Sunday Morning Sessions",
        fee: 320,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-01-20T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 3. Graphic Design Masterclass
    {
        id: "gd-masterclass",
        title: "Professional Graphic Design & Brand Identity",
        slug: "professional-graphic-design-brand-identity",
        category: "Graphics Design",
        categorySlug: "graphics-design",
        shortDescription: "Master industry-standard design tools including Adobe Photoshop, Illustrator, and InDesign to produce compelling visual assets.",
        description: "Transform your visual creativity into professional design skills. This comprehensive hands-on program guides learners through visual hierarchy, typography, color theory, and composition before diving deep into Adobe Photoshop for raster editing, Adobe Illustrator for vector creation, and Adobe InDesign for editorial layout. Students build a comprehensive brand identity package by the end of the course.",
        imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
        duration: "12 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid"
        ],
        modules: [
            "Module 1: Design Principles: Balance, Contrast, Hierarchy & Space",
            "Module 2: Typography Selection, Font Pairing & Color Harmony",
            "Module 3: Adobe Illustrator: Vector Tools, Pen Tool & Shapes",
            "Module 4: Logo Design, Iconography & Brand Assets",
            "Module 5: Adobe Photoshop: Layers, Masks & Photo Manipulation",
            "Module 6: Digital Advertising & Social Media Visual Creation",
            "Module 7: Adobe InDesign: Document Grids, Master Pages & Multi-Page Layouts",
            "Module 8: Print Production: Color Modes (CMYK vs RGB), Bleeds & Resolutions",
            "Module 9: Packaging & Marketing Collateral Design",
            "Module 10: Professional Portfolio Presentation"
        ],
        learningOutcomes: [
            "Master Adobe Creative Cloud tools: Photoshop, Illustrator, InDesign",
            "Design distinctive logos, brand guideline manuals, and marketing kits",
            "Prepare digital assets optimized for web and high-resolution print",
            "Assemble an impressive design portfolio to showcase to prospective clients"
        ],
        requirements: [
            "Access to a computer capable of running Adobe Creative Cloud",
            "No formal arts or drawing background required"
        ],
        schedule: "Weekday Mornings or Afternoon Sessions",
        fee: 380,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-01-25T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 4. Video Editing & Post-Production
    {
        id: "ve-post-prod",
        title: "Video Editing & Post-Production (Premiere & DaVinci)",
        slug: "video-editing-post-production",
        category: "Video Editing",
        categorySlug: "video-editing",
        shortDescription: "Learn video storytelling, professional cutting techniques, color grading, and audio sweetening with Premiere Pro and DaVinci Resolve.",
        description: "From commercial clips and social media reels to corporate documentaries, video is the leading medium of digital communication. This course provides comprehensive training in non-linear video editing workflows. Learn assembly cuts, J and L cuts, pacing, motion graphics with After Effects, audio mastering, and color grading in DaVinci Resolve.",
        imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
        duration: "10 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid"
        ],
        modules: [
            "Module 1: Video Formats, Codecs, Frame Rates & Project Management",
            "Module 2: Timeline Editing Mechanics, Rough Cuts & Rhythm in Premiere Pro",
            "Module 3: Advanced Trimming, Multicam Editing & Transitions",
            "Module 4: Audio Cleanup, Sound Design & Audio Track Mixing",
            "Module 5: Introduction to Motion Graphics & Lower Thirds in After Effects",
            "Module 6: Color Theory, Video Scopes & Primary Color Correction",
            "Module 7: DaVinci Resolve Color Grading & Look Development",
            "Module 8: Visual Effects, Masking, Tracking & Green Screen Removal",
            "Module 9: Export Presets for YouTube, TikTok, Cinema & Broadcast",
            "Module 10: Final Showcase Video Project"
        ],
        learningOutcomes: [
            "Edit complex multi-track video timelines with speed and precision",
            "Design crisp audio mixes with sound effects and clean dialogue",
            "Perform professional color correction and cinematic color grading",
            "Create motion graphic titles and dynamic lower-thirds",
            "Export high-quality optimized media for various platforms"
        ],
        requirements: [
            "A computer with a dedicated graphics card recommended for video playback",
            "Basic file management skills"
        ],
        schedule: "Tuesday & Thursday Evenings",
        fee: 390,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-02-01T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 5. AutoCAD & Engineering Software
    {
        id: "eng-autocad-revit",
        title: "AutoCAD & Revit for Engineering & Architectural Design",
        slug: "autocad-revit-engineering-architecture",
        category: "Engineering Software",
        categorySlug: "engineering-software",
        shortDescription: "Draft precise 2D technical drawings and construct parametric 3D Building Information Models (BIM) using AutoCAD and Revit.",
        description: "Designed for civil engineers, mechanical drafters, architects, and technical professionals, this course delivers hands-on instruction in industry-standard computer-aided design software. Students begin with AutoCAD drafting conventions, geometric constraints, layers, and dimensioning before advancing to Autodesk Revit for BIM modeling, structural detailing, and sheet generation.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        duration: "12 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid"
        ],
        modules: [
            "Module 1: AutoCAD Interface, Coordinate Systems & Drafting Tools",
            "Module 2: 2D Geometric Construction, Layers & Object Properties",
            "Module 3: Dimensioning Standards, Tolerances & Annotation Styles",
            "Module 4: Blocks, Dynamic Attributes & External References (XRefs)",
            "Module 5: Layout Viewports, Plotting & Publishing CAD Sets",
            "Module 6: Transition to BIM: Revit Fundamentals & Project Setup",
            "Module 7: Modeling Walls, Slabs, Roofs, Doors & Windows",
            "Module 8: Structural Columns, Beams & Foundation Elements",
            "Module 9: Quantity Schedules, Material Takeoffs & Documentation Sheets",
            "Module 10: Complete Architectural/Engineering Project Portfolio"
        ],
        learningOutcomes: [
            "Produce standard compliant 2D engineering and architectural drawings",
            "Construct parametric 3D building models using Autodesk Revit",
            "Extract accurate material quantities and component schedules",
            "Prepare multi-sheet technical drawing sets ready for permit and construction"
        ],
        requirements: [
            "General interest or background in engineering, architecture, or construction drafting",
            "Windows PC meeting Autodesk minimum software hardware specifications"
        ],
        schedule: "Saturday Intensive Batches",
        fee: 480,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-02-05T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 6. Basic Computer Skills
    {
        id: "bcs-office",
        title: "Essential Computer Literacy & Microsoft Office Suite",
        slug: "essential-computer-literacy-microsoft-office",
        category: "Basic Computer Skills",
        categorySlug: "basic-computer-skills",
        shortDescription: "Gain confident mastery over Windows, file systems, internet productivity, and Microsoft Word, Excel, and PowerPoint.",
        description: "A foundational program crafted for beginners and workplace professionals seeking to sharpen daily digital productivity. Learn how to navigate modern operating systems, organize files safely, use cloud storage, write professional business documents in Microsoft Word, analyze and organize data in Excel, and deliver persuasive slide presentations in PowerPoint.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        duration: "6 Weeks",
        level: "All Level",
        mode: [
            "In Person"
        ],
        modules: [
            "Module 1: Computer Hardware, Windows Navigation & System Settings",
            "Module 2: File Management, Folder Hierarchies, Backups & Cloud Drives",
            "Module 3: Web Browsing, Search Techniques & Email Etiquette",
            "Module 4: Microsoft Word: Document Formatting, Tables & Professional Reports",
            "Module 5: Microsoft Excel: Spreadsheets, Basic Formulas (SUM, AVERAGE, IF)",
            "Module 6: Microsoft Excel: Sorting, Filtering & Chart Visualizations",
            "Module 7: Microsoft PowerPoint: Slide Design, Animation & Presentation Delivery",
            "Module 8: Digital Safety: Passwords, Phishing Awareness & Safe Browsing"
        ],
        learningOutcomes: [
            "Navigate Windows confidently and organize files systematically",
            "Draft polished formal letters, reports, and memos in Microsoft Word",
            "Build structured calculation sheets and charts in Microsoft Excel",
            "Create clean presentation decks in Microsoft PowerPoint",
            "Practice safe computing habits in personal and office settings"
        ],
        requirements: [
            "No prior computer experience necessary; suitable for absolute beginners"
        ],
        schedule: "Morning & Afternoon Options",
        fee: 180,
        currency: "USD",
        featured: false,
        published: true,
        createdAt: "2026-02-10T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 7. Digital Marketing
    {
        id: "dm-growth",
        title: "Digital Marketing & Performance Growth",
        slug: "digital-marketing-performance-growth",
        category: "Digital Marketing",
        categorySlug: "digital-marketing",
        shortDescription: "Learn to build targeted digital campaigns, master SEO, manage social media channels, and interpret marketing analytics.",
        description: "Develop the strategic and analytical toolkit needed to promote businesses online. This course covers the complete customer journey, from organic search visibility (SEO) and content marketing to paid social advertising (Meta Ads, TikTok Ads) and Google Ads, accompanied by Google Analytics 4 performance tracking.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        duration: "8 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Online",
            "Hybrid"
        ],
        modules: [
            "Module 1: Foundations of Digital Marketing & Audience Persona Mapping",
            "Module 2: Search Engine Optimization (SEO): Keyword Research & On-Page SEO",
            "Module 3: Technical SEO, Link Building & Local Search Optimization",
            "Module 4: Content Strategy, Copywriting & Brand Storytelling",
            "Module 5: Social Media Marketing: Meta (Facebook/Instagram) & LinkedIn",
            "Module 6: Paid Advertising Campaigns & Conversion Rate Optimization",
            "Module 7: Email Marketing Automation & Lead Nurturing",
            "Module 8: Google Analytics 4, Tag Manager & ROI Reporting"
        ],
        learningOutcomes: [
            "Formulate cohesive digital marketing strategies for diverse businesses",
            "Perform SEO audits and optimize web pages to rank in search results",
            "Launch and measure targeted social media ad campaigns",
            "Analyze key metrics to calculate campaign ROI and optimize conversions"
        ],
        requirements: [
            "Familiarity with web browsing and major social media platforms",
            "Personal computer with internet connection"
        ],
        schedule: "Monday & Wednesday Evenings",
        fee: 340,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-02-12T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 8. Accounting Software
    {
        id: "acc-quickbooks-excel",
        title: "Computerized Accounting with QuickBooks & Advanced Excel",
        slug: "computerized-accounting-quickbooks-excel",
        category: "Accounting Software",
        categorySlug: "accounting-software",
        shortDescription: "Master computerized financial accounting, invoicing, bank reconciliations, inventory, and payroll using QuickBooks and Excel.",
        description: "Equip yourself with practical bookkeeping and financial accounting skills demanded by modern businesses. Through realistic case studies, learn to set up company charts of accounts, track customer invoices, manage vendor bills, reconcile bank accounts, calculate payroll, and generate balance sheets and profit & loss statements in QuickBooks and advanced Excel.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
        duration: "8 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid"
        ],
        modules: [
            "Module 1: Accounting Principles Refresher & Chart of Accounts Setup",
            "Module 2: Setting Up Company Files in QuickBooks Desktop & Online",
            "Module 3: Managing Customers, Sales Invoicing & Accounts Receivable",
            "Module 4: Managing Vendors, Purchase Orders & Accounts Payable",
            "Module 5: Inventory Tracking, Valuation & Adjustments",
            "Module 6: Bank Feeds, Electronic Payments & Monthly Bank Reconciliation",
            "Module 7: Payroll Processing, Deductions & Tax Reporting",
            "Module 8: Advanced Excel for Finance: VLOOKUP, XLOOKUP & Pivot Tables",
            "Module 9: Generating Financial Statements (P&L, Balance Sheet, Cash Flow)",
            "Module 10: Practical Comprehensive Bookkeeping Audit Exercise"
        ],
        learningOutcomes: [
            "Configure and operate QuickBooks for small and medium-sized enterprises",
            "Record everyday financial transactions accurately",
            "Reconcile monthly bank accounts and identify variances",
            "Build dynamic financial spreadsheets and reports using Advanced Excel",
            "Generate management reports to support business decisions"
        ],
        requirements: [
            "Basic understanding of debit and credit principles or secondary school accounting",
            "Basic computer literacy"
        ],
        schedule: "Weekend Intensive or Evening Batches",
        fee: 310,
        currency: "USD",
        featured: false,
        published: true,
        createdAt: "2026-02-15T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 9. Photography & Videography
    {
        id: "photo-video-production",
        title: "Photography, Cinematography & Studio Lighting",
        slug: "photography-cinematography-studio-lighting",
        category: "Photography, Cinematography & Videography",
        categorySlug: "photography-cinematography-videography",
        shortDescription: "Learn professional camera operation, exposure control, studio lighting setups, cinematic composition, and on-set production.",
        description: "Explore the art and technical craft of visual capture. This hands-on course teaches students how to master camera settings (aperture, shutter speed, ISO), utilize prime and zoom lenses, control natural light, configure continuous and strobe studio lighting, record clear production audio, and direct engaging photographic and cinematic shoots.",
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        duration: "8 Weeks",
        level: "All Level",
        mode: [
            "In Person"
        ],
        modules: [
            "Module 1: Camera Anatomy: Sensor Sizes, Focal Lengths & Manual Exposure",
            "Module 2: Exposure Triangle: Aperture, Shutter Speed & ISO Balance",
            "Module 3: Composition Rules, Leading Lines & Visual Storytelling",
            "Module 4: Studio Lighting: 3-Point Lighting, Modifiers, Softboxes & Reflectors",
            "Module 5: Portraiture & Commercial Product Photography",
            "Module 6: Motion Cinematography: Camera Movement, Gimbal Work & Framing",
            "Module 7: Production Audio: Lavaliers, Shotgun Mics & Sound Levels",
            "Module 8: Practical On-Location Shoot & Client Delivery Workflow"
        ],
        learningOutcomes: [
            "Operate DSLR and mirrorless cinema cameras completely in manual mode",
            "Sculpt professional lighting in studio and natural environments",
            "Capture crisp cinematic video shots with smooth camera movements",
            "Record clean audio on location using professional microphones",
            "Direct creative visual shoots from concept to execution"
        ],
        requirements: [
            "Access to a DSLR or mirrorless camera with manual controls (or institute equipment during in-person studio sessions)"
        ],
        schedule: "Saturday Morning Studio Practical Sessions",
        fee: 370,
        currency: "USD",
        featured: false,
        published: true,
        createdAt: "2026-02-18T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 10. Languages: English Communication
    {
        id: "lang-english-prof",
        title: "Professional English Communication & Workplace Fluency",
        slug: "professional-english-communication-workplace-fluency",
        category: "Languages",
        categorySlug: "languages",
        shortDescription: "Elevate your spoken and written English fluency for professional settings, interviews, presentations, and correspondence.",
        description: "Designed for ambitious students and professionals looking to communicate confidently in English. This interactive course develops active listening, conversational fluency, business correspondence, presentation delivery, and interview confidence. Through simulated meetings and discussions, participants overcome hesitation and master clear, professional articulation.",
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
        duration: "10 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Online",
            "Hybrid"
        ],
        modules: [
            "Module 1: Diagnostic Assessment & Personal Communication Goals",
            "Module 2: Pronunciation, Intonation & Overcoming Hesitation",
            "Module 3: Conversational Fluency & Spontaneous Discussion Techniques",
            "Module 4: Business Correspondence: Formal Emails, Inquiries & Reports",
            "Module 5: Public Speaking & Designing Engaging Presentations",
            "Module 6: Active Listening, Negotiation & Meeting Etiquette",
            "Module 7: Interview Skills, Elevator Pitches & Professional CV Writing",
            "Module 8: Capstone: Recorded Professional Presentation & Feedback"
        ],
        learningOutcomes: [
            "Speak fluently and clearly in everyday and formal business contexts",
            "Draft concise, professional emails and business documentation",
            "Deliver persuasive presentations with confidence",
            "Prepare and excel in professional job interviews"
        ],
        requirements: [
            "Basic conversational familiarity with English",
            "Commitment to active spoken participation during practice sessions"
        ],
        schedule: "Morning or Evening Sessions Available",
        fee: 250,
        currency: "USD",
        featured: true,
        published: true,
        createdAt: "2026-02-20T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 11. Civil 3D & Structural Software
    {
        id: "eng-etabs-civil3d",
        title: "ETABS & Civil 3D Structural & Infrastructure Design",
        slug: "etabs-civil3d-structural-infrastructure-design",
        category: "Engineering Software",
        categorySlug: "engineering-software",
        shortDescription: "Perform structural analysis, building design, and civil infrastructure earthwork modeling with ETABS and Civil 3D.",
        description: "An advanced practical course for civil and structural engineers. Learn to model multi-story concrete and steel buildings, assign load combinations (gravity, wind, seismic), analyze structural behavior, and detail reinforced concrete members in ETABS. Explore Civil 3D for terrain modeling, road corridor design, and earthwork cut/fill calculations.",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
        duration: "10 Weeks",
        level: "All Level",
        mode: [
            "In Person",
            "Hybrid"
        ],
        modules: [
            "Module 1: Structural Modeling Concepts & Grid Systems in ETABS",
            "Module 2: Material Properties, Frame Sections & Slab Specifications",
            "Module 3: Dead, Live, Wind & Seismic Load Definitions (Code Compliance)",
            "Module 4: Structural Analysis, Deflections & Drift Checks",
            "Module 5: Concrete Column, Beam & Shear Wall Reinforcement Design",
            "Module 6: Civil 3D Interface, Survey Point Imports & Surface Creation",
            "Module 7: Horizontal Alignments, Vertical Profiles & Road Assemblies",
            "Module 8: Corridor Modeling & Cross-Section Earthwork Volumes",
            "Module 9: Final Infrastructure Capstone Project"
        ],
        learningOutcomes: [
            "Model and analyze reinforced concrete structures using ETABS",
            "Apply international code provisions for wind and seismic loading",
            "Generate structural design schedules for fabrication and casting",
            "Design civil transportation corridors and calculate earthworks in Civil 3D"
        ],
        requirements: [
            "Background or degree studies in civil or structural engineering",
            "Basic familiarity with AutoCAD drafting"
        ],
        schedule: "Weekend Afternoon Sessions",
        fee: 520,
        currency: "USD",
        featured: false,
        published: true,
        createdAt: "2026-02-22T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    },
    // 12. Modern JavaScript & TypeScript
    {
        id: "prog-js-ts",
        title: "Modern JavaScript (ES6+) & TypeScript Mastery",
        slug: "modern-javascript-typescript-mastery",
        category: "Programming Languages",
        categorySlug: "programming-languages",
        shortDescription: "Deep dive into asynchronous JavaScript, closures, promises, TypeScript types, generics, and clean code patterns.",
        description: "Take your programming skills to the next level by mastering the language that powers the modern web. This course unpacks the JavaScript engine, event loop, asynchronous execution, closures, higher-order functions, and ES2024 features before introducing TypeScript's powerful static type system, interfaces, generics, and enterprise architecture patterns.",
        imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80",
        duration: "8 Weeks",
        level: "All Level",
        mode: [
            "Online",
            "Hybrid"
        ],
        modules: [
            "Module 1: JavaScript Engine Execution Context, Call Stack & Hoisting",
            "Module 2: Scopes, Closures, Context (`this`), & Functional Programming",
            "Module 3: Asynchronous JS: Event Loop, Callbacks, Promises & Async/Await",
            "Module 4: Modules, Bundlers & Modern Tooling (Vite, npm)",
            "Module 5: Introduction to TypeScript: Basic Types & Type Inference",
            "Module 6: Interfaces, Type Aliases, Enums & Union/Intersection Types",
            "Module 7: Generics, Utility Types & Type Narrowing",
            "Module 8: Building a Type-Safe Library Project with Tests"
        ],
        learningOutcomes: [
            "Understand JavaScript runtime behavior and the event loop deeply",
            "Write asynchronous, robust, non-blocking code",
            "Create type-safe applications with TypeScript and eliminate runtime errors",
            "Architect clean, reusable code modules according to best practices"
        ],
        requirements: [
            "Basic understanding of programming fundamentals in any language"
        ],
        schedule: "Monday & Wednesday Evenings",
        fee: 330,
        currency: "USD",
        featured: false,
        published: true,
        createdAt: "2026-02-25T00:00:00Z",
        updatedAt: "2026-03-01T00:00:00Z"
    }
];
}),
"[project]/src/lib/firebase/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db,
    "isFirebaseConfigured",
    ()=>isFirebaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export b7 as getFirestore>");
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCoRlvCwFJospD-IyFkCm_2vsHISv5Zdy0"),
    authDomain: ("TURBOPACK compile-time value", "toptrainings-fcb43.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "toptrainings-fcb43"),
    storageBucket: ("TURBOPACK compile-time value", "toptrainings-fcb43.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "678149143579"),
    appId: ("TURBOPACK compile-time value", "1:678149143579:web:638501f43d66ba6632ccbe")
};
const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.apiKey !== "your_api_key_here");
let app = null;
let db = null;
if (("TURBOPACK compile-time value", "undefined") !== "undefined" || isFirebaseConfigured) {
    try {
        if (isFirebaseConfigured) {
            app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
            db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__["getFirestore"])(app);
        }
    } catch (error) {
        console.warn("Firebase initialization skipped or failed:", error);
    }
}
;
}),
"[project]/src/lib/firebase/firestore.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteInquiry",
    ()=>deleteInquiry,
    "getCourseBySlug",
    ()=>getCourseBySlug,
    "getFeaturedCourses",
    ()=>getFeaturedCourses,
    "getInquiries",
    ()=>getInquiries,
    "getPublishedCourses",
    ()=>getPublishedCourses,
    "seedCoursesToFirestore",
    ()=>seedCoursesToFirestore,
    "submitInquiry",
    ()=>submitInquiry,
    "updateInquiryStatus",
    ()=>updateInquiryStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export a_ as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export bd as serverTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export t as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export an as Timestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/fallback-courses.ts [app-rsc] (ecmascript)");
;
;
;
async function getPublishedCourses() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"];
    }
    try {
        const coursesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "courses");
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(coursesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("published", "==", true));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(q);
        if (snapshot.empty) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"];
        }
        const courses = [];
        snapshot.forEach((docSnap)=>{
            const data = docSnap.data();
            courses.push({
                id: docSnap.id,
                title: data.title || "",
                slug: data.slug || docSnap.id,
                category: data.category || "",
                categorySlug: data.categorySlug || "",
                shortDescription: data.shortDescription || "",
                description: data.description || "",
                imageUrl: data.imageUrl || "",
                duration: data.duration || "",
                level: "All Level",
                mode: Array.isArray(data.mode) ? data.mode : [
                    "In Person"
                ],
                modules: Array.isArray(data.modules) ? data.modules : [],
                learningOutcomes: Array.isArray(data.learningOutcomes) ? data.learningOutcomes : [],
                requirements: Array.isArray(data.requirements) ? data.requirements : [],
                schedule: data.schedule,
                fee: data.fee,
                currency: data.currency || "USD",
                featured: Boolean(data.featured),
                published: Boolean(data.published),
                createdAt: data.createdAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"] ? data.createdAt.toDate().toISOString() : data.createdAt,
                updatedAt: data.updatedAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"] ? data.updatedAt.toDate().toISOString() : data.updatedAt
            });
        });
        return courses.length > 0 ? courses : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"];
    } catch (error) {
        console.warn("Error fetching courses from Firestore, using fallback catalog:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"];
    }
}
async function getFeaturedCourses() {
    const allCourses = await getPublishedCourses();
    const featured = allCourses.filter((course)=>course.featured);
    return featured.length > 0 ? featured : allCourses.slice(0, 6);
}
async function getCourseBySlug(slug) {
    if (!slug) return null;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        try {
            const coursesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "courses");
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(coursesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("slug", "==", slug));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(q);
            if (!snapshot.empty) {
                const docSnap = snapshot.docs[0];
                const data = docSnap.data();
                return {
                    id: docSnap.id,
                    title: data.title || "",
                    slug: data.slug || docSnap.id,
                    category: data.category || "",
                    categorySlug: data.categorySlug || "",
                    shortDescription: data.shortDescription || "",
                    description: data.description || "",
                    imageUrl: data.imageUrl || "",
                    duration: data.duration || "",
                    level: "All Level",
                    mode: Array.isArray(data.mode) ? data.mode : [
                        "In Person"
                    ],
                    modules: Array.isArray(data.modules) ? data.modules : [],
                    learningOutcomes: Array.isArray(data.learningOutcomes) ? data.learningOutcomes : [],
                    requirements: Array.isArray(data.requirements) ? data.requirements : [],
                    schedule: data.schedule,
                    fee: data.fee,
                    currency: data.currency || "USD",
                    featured: Boolean(data.featured),
                    published: Boolean(data.published),
                    createdAt: data.createdAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"] ? data.createdAt.toDate().toISOString() : data.createdAt,
                    updatedAt: data.updatedAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"] ? data.updatedAt.toDate().toISOString() : data.updatedAt
                };
            }
        } catch (error) {
            console.warn(`Error fetching course ${slug} from Firestore:`, error);
        }
    }
    // Fallback lookup
    const found = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"].find((c)=>c.slug.toLowerCase() === slug.toLowerCase() || c.id === slug);
    return found || null;
}
async function submitInquiry(input) {
    // Input validation
    const cleanName = input.fullName?.trim();
    const cleanEmail = input.email?.trim().toLowerCase();
    const cleanPhone = input.phone?.trim();
    const cleanCourse = input.courseInterest?.trim();
    const cleanSubject = input.subject?.trim();
    const cleanMessage = input.message?.trim();
    if (!cleanName || cleanName.length < 2) {
        return {
            success: false,
            error: "Please enter your full name."
        };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
        return {
            success: false,
            error: "Please provide a valid email address."
        };
    }
    if (!cleanPhone || cleanPhone.length < 5) {
        return {
            success: false,
            error: "Please provide a valid contact phone number."
        };
    }
    if (!cleanSubject || cleanSubject.length < 3) {
        return {
            success: false,
            error: "Please specify a subject for your inquiry."
        };
    }
    if (!cleanMessage || cleanMessage.length < 10) {
        return {
            success: false,
            error: "Please enter a message of at least 10 characters."
        };
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        // Graceful offline/demo mode: simulates successful submission
        console.info("Firestore unconfigured: inquiry recorded locally in demo mode:", {
            ...input,
            status: "new",
            createdAt: new Date().toISOString()
        });
        return {
            success: true,
            id: `demo-${Date.now()}`
        };
    }
    try {
        const inquiriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "inquiries");
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])(inquiriesRef, {
            fullName: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            courseInterest: cleanCourse || "General Inquiry",
            subject: cleanSubject,
            message: cleanMessage,
            status: "new",
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])()
        });
        return {
            success: true,
            id: docRef.id
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to submit inquiry. Please try again or reach out by phone/email.";
        console.error("Firestore inquiry submission error:", err);
        return {
            success: false,
            error: message
        };
    }
}
async function seedCoursesToFirestore() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        throw new Error("Firebase is not configured. Please supply environment variables in .env.local.");
    }
    let count = 0;
    for (const course of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fallback$2d$courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FALLBACK_COURSES"]){
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "courses", course.slug);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])(docRef, {
            ...course,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])(),
            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])()
        }, {
            merge: true
        });
        count++;
    }
    return {
        count
    };
}
// In-memory store for demo inquiries if Firestore is unconfigured
const DEMO_INQUIRIES = [
    {
        id: "demo-inq-1",
        fullName: "Abebe Bikila",
        email: "abebe.bikila@gmail.com",
        phone: "0911223344",
        courseInterest: "Full-Stack Website Development",
        subject: "Class schedule & weekend batches",
        message: "Hello Top Training, I am interested in joining the upcoming weekend batch for Full-Stack Website Development. Are seats available at the Megenagna branch?",
        status: "new",
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    },
    {
        id: "demo-inq-2",
        fullName: "Sara Tadesse",
        email: "sara.t@yahoo.com",
        phone: "0922446688",
        courseInterest: "Graphics Design Masterclass",
        subject: "Enrollment at Mexico branch",
        message: "I would like to enroll in Photoshop & Illustrator. Could someone please call me to confirm the timing?",
        status: "contacted",
        createdAt: new Date(Date.now() - 3600000 * 26).toISOString()
    }
];
async function getInquiries() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        return DEMO_INQUIRIES;
    }
    try {
        const inquiriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "inquiries");
        // Order by createdAt desc; fallback to unordered if index is building
        let snapshot;
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(inquiriesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["orderBy"])("createdAt", "desc"));
            snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(q);
        } catch  {
            snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(inquiriesRef);
        }
        if (snapshot.empty) {
            return [];
        }
        const inquiries = [];
        snapshot.forEach((docSnap)=>{
            const data = docSnap.data();
            let createdAtStr;
            if (data.createdAt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"]) {
                createdAtStr = data.createdAt.toDate().toISOString();
            } else if (typeof data.createdAt === "string") {
                createdAtStr = data.createdAt;
            } else {
                createdAtStr = new Date().toISOString();
            }
            inquiries.push({
                id: docSnap.id,
                fullName: data.fullName || "Anonymous",
                email: data.email || "",
                phone: data.phone || "",
                courseInterest: data.courseInterest || "General Inquiry",
                subject: data.subject || "No Subject",
                message: data.message || "",
                status: data.status || "new",
                createdAt: createdAtStr
            });
        });
        // Sort manually if unordered
        return inquiries.sort((a, b)=>{
            const timeA = typeof a.createdAt === "string" ? new Date(a.createdAt).getTime() : 0;
            const timeB = typeof b.createdAt === "string" ? new Date(b.createdAt).getTime() : 0;
            return timeB - timeA;
        });
    } catch (error) {
        console.error("Error fetching inquiries from Firestore:", error);
        return DEMO_INQUIRIES;
    }
}
async function updateInquiryStatus(id, status) {
    if (!id) return {
        success: false,
        error: "Missing inquiry ID"
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        const item = DEMO_INQUIRIES.find((i)=>i.id === id);
        if (item) item.status = status;
        return {
            success: true
        };
    }
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "inquiries", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])(docRef, {
            status,
            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])()
        });
        return {
            success: true
        };
    } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to update inquiry status";
        return {
            success: false,
            error: msg
        };
    }
}
async function deleteInquiry(id) {
    if (!id) return {
        success: false,
        error: "Missing inquiry ID"
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"]) {
        const idx = DEMO_INQUIRIES.findIndex((i)=>i.id === id);
        if (idx !== -1) DEMO_INQUIRIES.splice(idx, 1);
        return {
            success: true
        };
    }
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "inquiries", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteDoc"])(docRef);
        return {
            success: true
        };
    } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to delete inquiry";
        return {
            success: false,
            error: msg
        };
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1sywnwp._.js.map