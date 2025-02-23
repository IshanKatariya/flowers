document.addEventListener("DOMContentLoaded", () => {
    let heading = document.getElementById("heading");
    let paragraph = document.getElementById("paragraph");
    let button = document.getElementById("button");


    let praises =[
        "Aarya I just want you to be the happiest, And i'll do whatever i can to make sure you are happy. Your one smile really makes my day.You are so precious to me! I hope you are reading this with a smile on your face, If not what are you even waiting for? Smilee Pleaseeeeeeee 🥰",
        "One thing that i love about you is you seem happy whenever some good thing has happened to me. This is very rare quality i have seen in a person. You are always happy for me and i can't explain how much that means to me! You are the best Aarya❤️",
        "I haven't got any flowers from anyone till now. But this is the first time i got a flower and that too from a person which is very close to my heart. I loved that gesture from you. Thankyou so much for that i loved it and will keep that safely in my heart💘",
        "Aarya you are not like any other girl. You are very different from all the girls i know. There are many instances like i was standing and waiting in a canteen to get the food and you were also there with me. Thats a very small thing but very close to my heart and i love you for that. I know you'll always be with me❤️",
        "I loved the way you give you 100% percent in friendship. That's a very big thing and it ain't easy to do that. That's very sweet of you.",
        " I feel so lucky to be your bestetstststs friend. I really wish you stay with me forever and this bond remains the same. I can't afford to lose you. Even after everthing i just want that Aarya should remain with me forever.❣️",
        "The day i confessed you was very special for me. I never thought that day would come. But when i got t know there's same feeling which you have for me. I was shocked ( In a good manner ) and there was no limit to my happiness. Still i can't process that in my mind , The girl which i had so much feelings for, has same feelings for me. That's a dream come true!🥹",
        "I love the bond which we share, We have same humour, same thoughts , same jokes and now even same feelings. Woahhh! I have found the perfect girl in my life. I wish this girl always stays in my life forever.💞",

    ]


    button.addEventListener("click", () => {
        heading.style.display="none";
        button.innerText="Tell more";
        paragraph.innerText= praises[Math.floor(Math.random() * praises.length)];
        paragraph.style.marginTop="40vh";
    });    
});