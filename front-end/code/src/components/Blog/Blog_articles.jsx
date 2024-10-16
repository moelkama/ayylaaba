import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';
import Blog_article from './Blog_article';
import Tasty_recipe from "./Tasty_recipe";
import Healty_food from "../Adds/Healty_food";
import Pagination from 'react-js-pagination';

const articles = [
    {
        title: "Crochet Projects for Noodle Lovers",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d47b/2cc5/f550dd4d6f62ddb2d08c6a9ed5691c3a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzQ9UJHNTCRFE9ZYki5LlfKltn7HHWqa8uOK7JEfrsIxknlLJ0SsDQBqubcpBOPBgMikkopfwVgUgqxlCZQ6l8DEeKbl2EdLd~0zJ4~7J38a1sMEO0BBNDYcLL49TPOAeM6rez78xcgijJxhKduoTicnrDhQ7zQtMqVC0L2Cdz8SbTnNhdVX~C8rSRwLmWNYw2-ppdZq4K9Ve5S8og-rvqQ2tmZyp~up0xcHBg6SMy1tKAiJjjmDRBfR3bm3Ye-BYdEyhTfimjTZj2CWXBPkejvyyeZ4ATgAqty38EqhcXxsasRlB7DY4js20X-ib4ueKoDAsVxMRSOmSr0f9hlNJw__",
        article_src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
    },
    {
        title: "10 Vegetarian Recipes To Eat This Month",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/f29f/c8ac/60f88d829be2b6014e31d49c3a39865b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4FWKChtbmS4b7jwqp2Zcxrb95ZopGqnOlAjplw3EqeapTt9N~a1IUsX4G13X2ebYJR0esMz4Q4hgfgMPCtvjwcBMx~HMJAdPfAHPugaK7iyY5a0FL4ZdwTptK6yMSeo-fPnjJDoWhUZai14CUMIhit~lQbSl7hY~6gY0p9TGmHsx05d93HF6LutXfedih8ScaggH9ENj16YI~em2wP5sPhdDcc95J985jP8YX2PEd1atXZL7mh1zik2SVNsYVumH5Fq3pjLSh-xK5YdeUAzoHgLI-1SZQdAjKWR3-AXdNWG-6aNuLvIW5YPbBkf5ZhjXkMRQvyu3gN3v1zEmXk7pw__",
        article_src: "https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkijQUsuBl7L-uD1qhEq9Qx~csTZSJOc2MLXEfCwCtOm4jT-WK9UOYjK0QkyoeKl-sPEQC354V9BjcJIEo8T4GQRMnoEzUscd5kGoAPlptgtw3YLo6Yv7Wj-afXF-gnmG~p71NWiwfRGPtTzZSCQZrBpAVOBqUc2eJkJ027~TtkVVA8yCWUUHzLVnw3jW6YrfIOSUd6UvJ4S3cUeFyvo7JfKVo0pl6OzHRlWG8nLIpeXot9T9DLLO6DScQQ2-BfZPQQ2fvywomFZcOJ-BE60IJa~MoxnF9kfVXKDFF-VsLZj9stvbOcZBf2kOCuC9vJFPvZZK80pc8R7i4o5Ppc1SA__",
    },
    {
        title: "Full Guide to Becoming a Professional Chef",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEGBUDf-lXFVdPw9bsiiE90j76pR4Pvh8Q9~KwCKrGr-ghDGjKUm1-WYhXEXvCrMsyWBVbbMa3xCgK-Vsz9Vt6ba5a0C0HA99ayy795J4k79QRciLXTOk0dReujeDfxbjwd0dKtdFKxDt6DEsyOp4FoncNwlhhwB9-uZNr5sHzQ4xf3DhcqzeN3t6kN5e4ilY2-7nZ7Sw3b5vHn9rFV6hRJILHHXYTJcwBJTo7WDm70tEFW~qeD648oZQq8PxoA~hn4lQjX0hqGm73Bk5cNevbiPZlalmoraq1fAtwh2Wgj8HUjUAbW0mVUo091~OEtq4KiUW4jeCX8LNas9oTuiew__",
        article_src: "https://s3-alpha-sig.figma.com/img/fda7/b675/72edf0c22c3c10c3199734e1fb943b72?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BP0qRAKivK1MyCuSYEB6R6xPJe8O14UCZoGnrCCI-n7TZR7OTnKpkeh4Wtaw-49YwvGykurLNoRtpILTbpv85vdXTbaOlvhgLE0WBCYIjCmBjAfT72A9j9JWvBJalnHtFXJS7FDPRG4baQdjzBf9TdtgFTw5rHrdMcUvejxhVFdBn1fj2ohIaxwAn-YYswI4SFKt7C3cxENNTvlAD5lq7y3ShxVgd7xy5btDKlEdOEme0~bfvOTWhGC6O0rnW-YqnRjiU9qtb-RocuPbGHSwzBIWBDNK3s92widp1Slvdbd-6fwXmDX0TctNEE4IK2r8aTBV2SlESZcYwud45aji7w__",
    },
    {
        title: "Simple & Delicious Vegetarian Lasagna",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/441a/ee01/5b3d6cf5466213c79115be9598b7ff80?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeDUyTEDBBbNsIJjaV~BFDLhl6~hbWP~SwzfQ~evyKEuewaP~3mnOttHMgM4eh3SIeBw5-WEB1rRH7NDIukOfwPyO1EMglyV-Gt~hMmKOAWGdIJOziMIOhhISh5w~K7uM4sy1YDZ4bf-LhEpqKy90aLeRbbHUb80UL5O8DVgrmRQrEkwUb1smk66SL1~oLsU0hTRheElnE6MeJ9TZljqhMvnxcp-BWw4Qn3IDiGZBQuaEjCkxRRSaMzcXxK5wJKJCbVLSj5KIxQR1qYZ-6XKcbV74-QzK5YshLPOnZ5B0j3qwYPJUKIDaVJJPCV2xiOwg71U8wIPHsTwfAg4MdsZvw__",
        article_src: "https://s3-alpha-sig.figma.com/img/f94c/cf56/ed632c57bc587dbdac7f55f2088fd4ff?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkqBi8H3NgBjk9PAezXoSQwECNrQV2DP2Z5-pJHQ3G4W-Ms0bnMgVs7RyGm6gB5Xy-sj14TLLAme-wOLAAgYIfPmUV3eCPaXLxvbv~pkqWspo4Xo1CxyQxpLR7QZG-StL~XlpPW~YziG-y2IHSvC~jGRuatI5L2WpUZ1CHoEfN0dlkb83cDyK4CUznIYlP~numS-QuU8YtrYS8NPHrMPwbMy0BLOWMMJUMClGcoDtAY40-I7KMxUcN1825wZumJmzxurw51tOL2HqN5Ia9hHr5vFZKTOGsTlHu0yOMl2ntII0Y8xwxzyUCoH4~1cc~z1EKhYy8t0EsaX95bzv3Dhzw__",
    },
    {
        title: "Plantain and Pinto Stew with Aji Verde",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d570/c0f1/17110267c7ebd167daa5cd7ec3acbb35?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtOPVi2mWLEZliQ3q4ECI3P83RdUQ55GXICETVTNL-oKhD6lNbhyDJefgYgDY6vVG7~PguFVG7bNMITl~YdUUHcxuwNGukoK3HjAwTHUmI0NnAGoYR0mH0CabBfSHsRyHONJxmqz-LONJsI6UV-gCGJh-BbfeQXnKtVPBoCofG4~9zGLCdUW1EoiX4MIqMMkSyJNOpdqnGArNDMiBquL2YmFJsVBqjQYFGx7yI-El~sMckIubGlNqykVM-Enys5pP18MZvosvwHd4yzyJfkT1e2wRfREa8oaYqmswAgD16bOK8KfXX69es1nYyCcxdp23oT9ralAahARrzzGW7MVFw__",
        article_src: "https://s3-alpha-sig.figma.com/img/b073/f6b7/463ad3eadcaf16571ba4f3a0ff32b879?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N86ySYVsUBew2GDZpTxIY4h-EUe-01LTil1LD3QIANLBCU11HKNC89X7MCnsJFub7HRpczWIB38gMhf3d7sNnAW4rOu-PCFakVQKkliw~4~dxonBTMc2HjfjHb5RAshsft7WAFv459rddeOdHPqv4LCjckwuNmIU0czwNSpBAJ-zjdMIMBhB85uicksjP8T1duV48hKQWlnhID6ahMqxceJxnvJpNVvQn~H08COmnyt2g6z2pFfd6-Lf7xFo96gS0Bf0DWJo2VSxsAt4eMNtbVnFnc2KWh5iU4~dCQwrOadsLcz9H8zddx8kAFMOCxyK2IlQ-1SMlRd7wo5rZS9akQ__",
    },
    {
        title: "We’re Hiring a Communications Assistant!",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqzE4t-H4pKbR8pKzx-4yKCw-OmBj0JS-IF9xZwAfhBWxVSd5sBsPxGaWhq5Y6uecyxBfteWiC-5CtcNKfpqQqrcIx~pGgndMAfw7jCA5EV9-LVv2E0vrrFyH6Me7odWrGnjd53q8cJ8R75UCJimDVMWLJ-PwErVuC8zPDc1OhUQSkCoE-e2B7g8xRVJVYVE7iJNYt1bjEk7YerEriVtJI9Il6h9bSMsDtLT0Fvbx7Ptq-XkvGujvEMonz3f3U4wVpI5g00-v6u3YneGCFsk9QKQhSUgBwQFkTp7rVN7znBCjKnQ9DxY3jj~YjoPq2jl~HxKkOc1kwd-sODM0GKaUQ__",
        article_src: "https://s3-alpha-sig.figma.com/img/d413/df5d/5ca2b1499887b1352b453e3a44d63b01?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gx5YWrr1WqWyJOSDGq-c7kvB6ZjJXnySXEqbqa37PkaK98Vj02UnFNIgBxSy-gZMjs1yoaS-Ixcp~eWo6GoPIMaAp~SaYtpF1EfmkKRZN~qv-ZSVC-o0v3BfP9xXQQfv3hxroT3NcdjjupwSprH0wDiRaXyGRKpdLDAbNmQZuJoBydbaQVsLhRH-c8jw7Z2u1hx0Zx5mrPKyfHF130ZCFuoLQgrJWotBwGyHXoQBdUG8WPQirthTmJMAx9L7X6bkQgpS0ZEJgvM1KnccZQ4QOgy4nMPubsgk8lt7wmRH2s-5k27qAhesmPtuQoei3SspbaW3dsX0oZjKa4LnVxxbIw__",
    },




    {
        title: "Full Guide to Becoming a Professional Chef",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEGBUDf-lXFVdPw9bsiiE90j76pR4Pvh8Q9~KwCKrGr-ghDGjKUm1-WYhXEXvCrMsyWBVbbMa3xCgK-Vsz9Vt6ba5a0C0HA99ayy795J4k79QRciLXTOk0dReujeDfxbjwd0dKtdFKxDt6DEsyOp4FoncNwlhhwB9-uZNr5sHzQ4xf3DhcqzeN3t6kN5e4ilY2-7nZ7Sw3b5vHn9rFV6hRJILHHXYTJcwBJTo7WDm70tEFW~qeD648oZQq8PxoA~hn4lQjX0hqGm73Bk5cNevbiPZlalmoraq1fAtwh2Wgj8HUjUAbW0mVUo091~OEtq4KiUW4jeCX8LNas9oTuiew__",
        article_src: "https://s3-alpha-sig.figma.com/img/fda7/b675/72edf0c22c3c10c3199734e1fb943b72?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BP0qRAKivK1MyCuSYEB6R6xPJe8O14UCZoGnrCCI-n7TZR7OTnKpkeh4Wtaw-49YwvGykurLNoRtpILTbpv85vdXTbaOlvhgLE0WBCYIjCmBjAfT72A9j9JWvBJalnHtFXJS7FDPRG4baQdjzBf9TdtgFTw5rHrdMcUvejxhVFdBn1fj2ohIaxwAn-YYswI4SFKt7C3cxENNTvlAD5lq7y3ShxVgd7xy5btDKlEdOEme0~bfvOTWhGC6O0rnW-YqnRjiU9qtb-RocuPbGHSwzBIWBDNK3s92widp1Slvdbd-6fwXmDX0TctNEE4IK2r8aTBV2SlESZcYwud45aji7w__",
    },
    {
        title: "Simple & Delicious Vegetarian Lasagna",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/441a/ee01/5b3d6cf5466213c79115be9598b7ff80?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeDUyTEDBBbNsIJjaV~BFDLhl6~hbWP~SwzfQ~evyKEuewaP~3mnOttHMgM4eh3SIeBw5-WEB1rRH7NDIukOfwPyO1EMglyV-Gt~hMmKOAWGdIJOziMIOhhISh5w~K7uM4sy1YDZ4bf-LhEpqKy90aLeRbbHUb80UL5O8DVgrmRQrEkwUb1smk66SL1~oLsU0hTRheElnE6MeJ9TZljqhMvnxcp-BWw4Qn3IDiGZBQuaEjCkxRRSaMzcXxK5wJKJCbVLSj5KIxQR1qYZ-6XKcbV74-QzK5YshLPOnZ5B0j3qwYPJUKIDaVJJPCV2xiOwg71U8wIPHsTwfAg4MdsZvw__",
        article_src: "https://s3-alpha-sig.figma.com/img/f94c/cf56/ed632c57bc587dbdac7f55f2088fd4ff?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkqBi8H3NgBjk9PAezXoSQwECNrQV2DP2Z5-pJHQ3G4W-Ms0bnMgVs7RyGm6gB5Xy-sj14TLLAme-wOLAAgYIfPmUV3eCPaXLxvbv~pkqWspo4Xo1CxyQxpLR7QZG-StL~XlpPW~YziG-y2IHSvC~jGRuatI5L2WpUZ1CHoEfN0dlkb83cDyK4CUznIYlP~numS-QuU8YtrYS8NPHrMPwbMy0BLOWMMJUMClGcoDtAY40-I7KMxUcN1825wZumJmzxurw51tOL2HqN5Ia9hHr5vFZKTOGsTlHu0yOMl2ntII0Y8xwxzyUCoH4~1cc~z1EKhYy8t0EsaX95bzv3Dhzw__",
    },
    {
        title: "Plantain and Pinto Stew with Aji Verde",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d570/c0f1/17110267c7ebd167daa5cd7ec3acbb35?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtOPVi2mWLEZliQ3q4ECI3P83RdUQ55GXICETVTNL-oKhD6lNbhyDJefgYgDY6vVG7~PguFVG7bNMITl~YdUUHcxuwNGukoK3HjAwTHUmI0NnAGoYR0mH0CabBfSHsRyHONJxmqz-LONJsI6UV-gCGJh-BbfeQXnKtVPBoCofG4~9zGLCdUW1EoiX4MIqMMkSyJNOpdqnGArNDMiBquL2YmFJsVBqjQYFGx7yI-El~sMckIubGlNqykVM-Enys5pP18MZvosvwHd4yzyJfkT1e2wRfREa8oaYqmswAgD16bOK8KfXX69es1nYyCcxdp23oT9ralAahARrzzGW7MVFw__",
        article_src: "https://s3-alpha-sig.figma.com/img/b073/f6b7/463ad3eadcaf16571ba4f3a0ff32b879?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N86ySYVsUBew2GDZpTxIY4h-EUe-01LTil1LD3QIANLBCU11HKNC89X7MCnsJFub7HRpczWIB38gMhf3d7sNnAW4rOu-PCFakVQKkliw~4~dxonBTMc2HjfjHb5RAshsft7WAFv459rddeOdHPqv4LCjckwuNmIU0czwNSpBAJ-zjdMIMBhB85uicksjP8T1duV48hKQWlnhID6ahMqxceJxnvJpNVvQn~H08COmnyt2g6z2pFfd6-Lf7xFo96gS0Bf0DWJo2VSxsAt4eMNtbVnFnc2KWh5iU4~dCQwrOadsLcz9H8zddx8kAFMOCxyK2IlQ-1SMlRd7wo5rZS9akQ__",
    },
    {
        title: "We’re Hiring a Communications Assistant!",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqzE4t-H4pKbR8pKzx-4yKCw-OmBj0JS-IF9xZwAfhBWxVSd5sBsPxGaWhq5Y6uecyxBfteWiC-5CtcNKfpqQqrcIx~pGgndMAfw7jCA5EV9-LVv2E0vrrFyH6Me7odWrGnjd53q8cJ8R75UCJimDVMWLJ-PwErVuC8zPDc1OhUQSkCoE-e2B7g8xRVJVYVE7iJNYt1bjEk7YerEriVtJI9Il6h9bSMsDtLT0Fvbx7Ptq-XkvGujvEMonz3f3U4wVpI5g00-v6u3YneGCFsk9QKQhSUgBwQFkTp7rVN7znBCjKnQ9DxY3jj~YjoPq2jl~HxKkOc1kwd-sODM0GKaUQ__",
        article_src: "https://s3-alpha-sig.figma.com/img/d413/df5d/5ca2b1499887b1352b453e3a44d63b01?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gx5YWrr1WqWyJOSDGq-c7kvB6ZjJXnySXEqbqa37PkaK98Vj02UnFNIgBxSy-gZMjs1yoaS-Ixcp~eWo6GoPIMaAp~SaYtpF1EfmkKRZN~qv-ZSVC-o0v3BfP9xXQQfv3hxroT3NcdjjupwSprH0wDiRaXyGRKpdLDAbNmQZuJoBydbaQVsLhRH-c8jw7Z2u1hx0Zx5mrPKyfHF130ZCFuoLQgrJWotBwGyHXoQBdUG8WPQirthTmJMAx9L7X6bkQgpS0ZEJgvM1KnccZQ4QOgy4nMPubsgk8lt7wmRH2s-5k27qAhesmPtuQoei3SspbaW3dsX0oZjKa4LnVxxbIw__",
    },
    {
        title: "Crochet Projects for Noodle Lovers",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d47b/2cc5/f550dd4d6f62ddb2d08c6a9ed5691c3a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzQ9UJHNTCRFE9ZYki5LlfKltn7HHWqa8uOK7JEfrsIxknlLJ0SsDQBqubcpBOPBgMikkopfwVgUgqxlCZQ6l8DEeKbl2EdLd~0zJ4~7J38a1sMEO0BBNDYcLL49TPOAeM6rez78xcgijJxhKduoTicnrDhQ7zQtMqVC0L2Cdz8SbTnNhdVX~C8rSRwLmWNYw2-ppdZq4K9Ve5S8og-rvqQ2tmZyp~up0xcHBg6SMy1tKAiJjjmDRBfR3bm3Ye-BYdEyhTfimjTZj2CWXBPkejvyyeZ4ATgAqty38EqhcXxsasRlB7DY4js20X-ib4ueKoDAsVxMRSOmSr0f9hlNJw__",
        article_src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
    },
    {
        title: "10 Vegetarian Recipes To Eat This Month",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/f29f/c8ac/60f88d829be2b6014e31d49c3a39865b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4FWKChtbmS4b7jwqp2Zcxrb95ZopGqnOlAjplw3EqeapTt9N~a1IUsX4G13X2ebYJR0esMz4Q4hgfgMPCtvjwcBMx~HMJAdPfAHPugaK7iyY5a0FL4ZdwTptK6yMSeo-fPnjJDoWhUZai14CUMIhit~lQbSl7hY~6gY0p9TGmHsx05d93HF6LutXfedih8ScaggH9ENj16YI~em2wP5sPhdDcc95J985jP8YX2PEd1atXZL7mh1zik2SVNsYVumH5Fq3pjLSh-xK5YdeUAzoHgLI-1SZQdAjKWR3-AXdNWG-6aNuLvIW5YPbBkf5ZhjXkMRQvyu3gN3v1zEmXk7pw__",
        article_src: "https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkijQUsuBl7L-uD1qhEq9Qx~csTZSJOc2MLXEfCwCtOm4jT-WK9UOYjK0QkyoeKl-sPEQC354V9BjcJIEo8T4GQRMnoEzUscd5kGoAPlptgtw3YLo6Yv7Wj-afXF-gnmG~p71NWiwfRGPtTzZSCQZrBpAVOBqUc2eJkJ027~TtkVVA8yCWUUHzLVnw3jW6YrfIOSUd6UvJ4S3cUeFyvo7JfKVo0pl6OzHRlWG8nLIpeXot9T9DLLO6DScQQ2-BfZPQQ2fvywomFZcOJ-BE60IJa~MoxnF9kfVXKDFF-VsLZj9stvbOcZBf2kOCuC9vJFPvZZK80pc8R7i4o5Ppc1SA__",
    },
]

export const   Tasties = [
    {
        type: "recipe",
        title: "Chicken Meatballs with Cream Cheese ",
        article_author_name: "Wade Warren",
        article_src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
    },
    {
        type: "recipe",
        title: "Traditional Bolognaise Ragu",
        article_author_name: "Andreas Paula",
        article_src: "https://s3-alpha-sig.figma.com/img/e6f0/82c6/8c251dd7a6228b84e9d68e27ddf2d47d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9K5IIPnV1GEIwvLkL16pex8ETZWawav7qMxPHCdKYuEF0RWg74-7mKZwnqyJdrja2KoWpvwBZzmUsSgJAAdnkk-ax05rn2QAeMxxABLRrQ1maXk4liZBOuCY64kjIIpqrE6K9pi-4YD1YXDbLeTTp5RnROuUDEgL7yPRz4wwFuDchsbW2PTK1h6jSYySTdTRBDGLGe1-CRVaGVwtLFrj5VjRpa5qf2065QnsNTX-PYPPl8pUFE1W4imkthrGEZVsCTIfzqMKibc9lgP8wtsiVwYs0i6-RLflFniU6HSbePHDG2Y305XzLuHbRX2ReFFsOP24wmhf-oOo80-ssYjWQ__",
    },
    {
        type: "recipe",
        title: "Pork and Chive Chinese Dumplings",
        article_author_name: "Wade Warren",
        article_src: "https://s3-alpha-sig.figma.com/img/0822/6ca6/474db938f387803398cf9968865f6c19?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1J-hjXo9BT7ac7nxjg0d~S3pJE8-I0~dlGGlC-ZFedqm4nq1iMAGp~XXkMbeADf2UsX-mXUAvwHGryrCwTJWwWbkdBDUBEYVIuocghXMxmOIPfTA5I94F5WuCitiAXjKXkCnT2mtu8rerW6iDhkrS-SCAtR3Pzw18DF3Dz1~-OEJcXDvzT6h8wX2MLgSsUWHtKsEg5d0yhTOQxyh0eqUsoO0PU7ZixBMbDkh7fZDQcYB4jSqrvqRvks5VAyr43WggQt2Emy0vPTLJYZ3DId1NHzHvQguSkL9WpkP3m2T-8MtKXM2NupoJW65-0XCDFPl8DbzMGUSaokpdAECqiZhw__",
    },
]

function Blog_articles() {
        const [activePage, setActivePage] = useState(1);
        const itemsPerPage = 6;
      
        const handlePageChange = (pageNumber) => {
          setActivePage(pageNumber);
        };

    const startIndex = (activePage - 1) * itemsPerPage;
    const paginatedItems = articles.slice(startIndex, startIndex + itemsPerPage);
      

    return (
        <>
            <div className="grid grid-cols-12 gap-10">
                <ul className="col-start-1 col-end-9 flex flex-col gap-4">
                    {paginatedItems.map((article, index) => (
                        <Blog_article key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src} />
                    ))}
                </ul>
                <div className=" col-start-9 col-end-13 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold mb-6">Tasty Recipes</h1>
                    {Tasties.map((article, index) => {
                        return (
                            <Tasty_recipe key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src}/>
                        )
                    })}
                    <div className="mt-10">
                        <Healty_food />
                    </div>
                </div>
            </div>
            <Pagination
                itemClass=""
                linkClass="bg-black border-2 border-black hover:text-black hover:bg-slate-300 text-white font-bold border rounded-xl h-10 w-10 flex justify-center items-center"
                activeLinkClass="bg-white"
                activeClass="[&>*]:text-black"
                innerClass="flex gap-2 mx-auto"
                linkClassNext="hidden"
                hideFirstLastPages={true}
                hideDisabled={true}
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={articles.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </>
    );
}

export default Blog_articles;