(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/motion/PlayInView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PlayInView({ children, className = "", once = false, decorative = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "PlayInView.useEffect": ([entry])=>{
                    if (once) {
                        if (entry.isIntersecting) {
                            setPlaying(true);
                            observer.disconnect();
                        }
                    } else {
                        setPlaying(entry.isIntersecting);
                    }
                }
            }["PlayInView.useEffect"], // Seuil 0 + marge : fonctionne aussi pour les blocs plus hauts que l'écran
            {
                threshold: 0,
                rootMargin: "0px 0px -12% 0px"
            });
            observer.observe(el);
            return ({
                "PlayInView.useEffect": ()=>observer.disconnect()
            })["PlayInView.useEffect"];
        }
    }["PlayInView.useEffect"], [
        once
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-playing": playing,
        className: `wv-stage ${className}`,
        "aria-hidden": decorative || undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/motion/PlayInView.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(PlayInView, "2ekNDAwii82FkISFBlsfBuOJfic=");
_c = PlayInView;
var _c;
__turbopack_context__.k.register(_c, "PlayInView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_motion_PlayInView_tsx_06igmm1z61fj_._.js.map