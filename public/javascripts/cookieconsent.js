(function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#edeff5",
                "text": "#838391"
            },
            "button": {
                "background": "#4b81e8"
            }
        },
        "theme": "classic",
        "position": "bottom-left",
        "type": "opt-in",
        "content": {
            "message": "当社では、本サイトでの体験を向上させ、コンテンツや広告のパーソナライズ、トラフィック分析の為、cookieを利用します。",
            "deny": "すべて拒否",
            "allow": "すべて許可",
            "link": "プライバシーポリシー",
            "href": "/public/help/privacy-policy.html"
        },
        "onStatusChange": function(status, chosenBefore){
            if(this.hasConsented()){
                console.log("ALLOW"); // 実際はGoogle Analytics などの許可実装
            }else{
                console.log("DENY"); // 実際はGoogle Analytics などの拒否実装
            }
        }
    });
})();