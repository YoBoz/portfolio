"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/componenets/hooks/useThemeSwitcher.js":
/*!***************************************************!*\
  !*** ./src/componenets/hooks/useThemeSwitcher.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar _s = $RefreshSig$();\nconst useThemeSwitcher = ()=>{\n    _s();\n    const prefersDarkQuery = \"(prefers-color-scheme: dark)\";\n    const userPref = window.localStorage.getItem(\"theme\");\n    const systemPref = window.matchMedia(prefersDarkQuery).matches ? \"dark\" : \"light\";\n    const [mode, setMode] = useState(userPref || systemPref);\n    useEffect(()=>{\n        const mediaQuery = window.matchMedia(prefersDarkQuery);\n        const handleChange = ()=>{\n            const currentPref = window.localStorage.getItem(\"theme\");\n            let check = currentPref || (mediaQuery.matches ? \"dark\" : \"light\");\n            setMode(check);\n            if (check === \"dark\") {\n                document.documentElement.classList.add(\"dark\");\n            } else {\n                document.documentElement.classList.remove(\"dark\");\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>{\n            mediaQuery.removeEventListener(\"change\", handleChange);\n        };\n    }, []);\n    useEffect(()=>{\n        if (mode === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n            window.localStorage.setItem(\"theme\", \"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n            window.localStorage.setItem(\"theme\", \"light\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwitcher, \"4xVTHhMx1K8QpyN7d4defdXQdMY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwitcher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW5ldHMvaG9va3MvdXNlVGhlbWVTd2l0Y2hlci5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLG1CQUFtQjs7SUFDckIsTUFBTUMsbUJBQW1CO0lBQ3pCLE1BQU1DLFdBQVdDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO0lBQzdDLE1BQU1DLGFBQWFILE9BQU9JLFVBQVUsQ0FBQ04sa0JBQWtCTyxPQUFPLEdBQUcsU0FBUztJQUMxRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0MsU0FBU1QsWUFBWUk7SUFFN0NNLFVBQVU7UUFDTixNQUFNQyxhQUFhVixPQUFPSSxVQUFVLENBQUNOO1FBRXJDLE1BQU1hLGVBQWU7WUFDakIsTUFBTUMsY0FBY1osT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7WUFDaEQsSUFBSVcsUUFBUUQsZUFBZ0JGLENBQUFBLFdBQVdMLE9BQU8sR0FBRyxTQUFTLE9BQU07WUFFaEVFLFFBQVFNO1lBRVIsSUFBSUEsVUFBVSxRQUFRO2dCQUNsQkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUMzQyxPQUFPO2dCQUNISCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQzlDO1FBQ0o7UUFFQVA7UUFDQUQsV0FBV1MsZ0JBQWdCLENBQUMsVUFBVVI7UUFFdEMsT0FBTztZQUNIRCxXQUFXVSxtQkFBbUIsQ0FBQyxVQUFVVDtRQUM3QztJQUNKLEdBQUcsRUFBRTtJQUVMRixVQUFVO1FBQ04sSUFBSUgsU0FBUyxRQUFRO1lBQ2pCUSxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3ZDakIsT0FBT0MsWUFBWSxDQUFDb0IsT0FBTyxDQUFDLFNBQVM7UUFDekMsT0FBTztZQUNIUCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQzFDbEIsT0FBT0MsWUFBWSxDQUFDb0IsT0FBTyxDQUFDLFNBQVM7UUFDekM7SUFDSixHQUFHO1FBQUNmO0tBQUs7SUFFVCxPQUFPO1FBQUNBO1FBQU1DO0tBQVE7QUFDMUI7R0F6Q01WO0FBMkNOLCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVuZXRzL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXIuanM/OWUxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJlZmVyc0RhcmtRdWVyeSA9ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJztcclxuICAgIGNvbnN0IHVzZXJQcmVmID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gICAgY29uc3Qgc3lzdGVtUHJlZiA9IHdpbmRvdy5tYXRjaE1lZGlhKHByZWZlcnNEYXJrUXVlcnkpLm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnO1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUodXNlclByZWYgfHwgc3lzdGVtUHJlZik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEocHJlZmVyc0RhcmtRdWVyeSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByZWYgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IGN1cnJlbnRQcmVmIHx8IChtZWRpYVF1ZXJ5Lm1hdGNoZXMgPyAnZGFyaycgOiAnbGlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIHNldE1vZGUoY2hlY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrID09PSAnZGFyaycpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcclxuICAgICAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWFRdWVyeS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbW9kZV0pXHJcblxyXG4gICAgcmV0dXJuIFttb2RlLCBzZXRNb2RlXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZVN3aXRjaGVyIl0sIm5hbWVzIjpbInVzZVRoZW1lU3dpdGNoZXIiLCJwcmVmZXJzRGFya1F1ZXJ5IiwidXNlclByZWYiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3lzdGVtUHJlZiIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1lZGlhUXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50UHJlZiIsImNoZWNrIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/componenets/hooks/useThemeSwitcher.js\n"));

/***/ })

});