document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social-links a");
    
    for (let link of socialLinks) {
        let platform = "";

        // Identify the social media platform based on the class of the <i> tag
        if (link.querySelector(".fa-facebook-f")) {
            platform = "facebook";
        } else if (link.querySelector(".fa-twitter")) {
            platform = "twitter";
        } else if (link.querySelector(".fa-instagram")) {
            platform = "instagram";
        }

        // Set the href based on the platform
        switch (platform) {
            case "facebook":
                link.href = "https://m.facebook.com/profile.php/?id=100001217089298&name=xhp_nt__fb__action__open_user";
                break;
            case "twitter":
                link.href = "https://twitter.com/3xchocolate";
                break;
            case "instagram":
                link.href = "https://www.instagram.com/dub__2k/";
                break;
            default:
                break;
        }
    }
});
