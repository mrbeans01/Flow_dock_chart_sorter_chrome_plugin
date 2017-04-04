/*
 / created by Aravind Singh Bisht
 / mrbeans01@gmail.com
 */
function flowDock_sortList() {
    var e, t, o, a, r;
    e = document.getElementsByClassName("org-flows");
    for (var s = "dsc" == localStorage.getItem("flowDockChatSort") ? localStorage.getItem("flowDockChatSort") : "asc", l = 0; l < e.length; l++)
        for (o = !0; o;) {
            for (o = !1, a = e[l].getElementsByTagName("LI"), t = 0; t < a.length - 1; t++)
                if (r = !1, "asc" == s) {
                    if (a[t].querySelector(".tab-name").innerText.toLowerCase() > a[t + 1].querySelector(".tab-name").innerHTML.toLowerCase()) {
                        r = !0;
                        break
                    }
                } else if (a[t].querySelector(".tab-name").innerText.toLowerCase() < a[t + 1].querySelector(".tab-name").innerHTML.toLowerCase()) {
                    r = !0;
                    break
                }
            r && (a[t].parentNode.insertBefore(a[t + 1], a[t]), o = !0)
        }
    "asc" == s ? localStorage.setItem("flowDockChatSort", "dsc") : localStorage.setItem("flowDockChatSort", "asc")
}
var pass = !0;
chrome.runtime.onMessage.addListener(function(e, t, o) {
    return "sortFlowDockChat" == e.text && pass ? (pass = !1, flowDock_sortList(), o(localStorage.getItem("flowDockChatSort")), void setTimeout(function() {
        pass = !0
    }, 500)) : void 0
});