//get the data
var users=[
    {
        profilepic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypicture:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmessages:4,
        location:"Delhi,India",
        name:"Harshita",
        age:23,
        interests:[{
            icon: `<i class="ri-spotify-line"></i>`,
            interest:"music"
        },{
            icon: `<i class="ri-quill-pen-line"></i>`,
            interest:"writing"
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.",
        isfriend:null
    },

    {
        profilepic:"https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypicture:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingmessages:12,
        location:"Lucknow,India",
        name:"Vanshita",
        age:22,
        interests:[{
            icon: `<i class="ri-spotify-line"></i>`,
            interest:"music"
        },{
            icon: `<i class="ri-quill-pen-line"></i>`,
            interest:"writing"
        }],
         bio:"Lorem, ipsum dolor sit amet consectetur.",
        isfriend:null
    },

    {
        profilepic:"https://images.unsplash.com/photo-1485340619878-bb139d7bcd15?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypicture:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        pendingmessages:1,
        location:"Mumbai,India",
        name:"Priya",
        age:25,
        interests:[{
            icon: `<i class="ri-spotify-line"></i>`,
            interest:"music"
        },{
            icon: `<i class="ri-quill-pen-line"></i>`,
            interest:"writing"
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        isfriend:null
    },

    {
        profilepic:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxfemxINm5zeTRKNHx8ZW58MHx8fHx8",
        displaypicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        pendingmessages:30,
        location:"Kolkata,India",
        name:"Anjali",
        age:26,
        interests:[{
            icon: `<i class="ri-spotify-line"></i>`,
            interest:"music"
        },{
            icon: `<i class="ri-quill-pen-line"></i>`,
            interest:"writing"
        }],
        bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.",
        isfriend:null
    }
];

function select(elem){
    return document.querySelector(elem);
}
var curr=0;
let isAnimating=false;

function setData(index){
    select(".prflimg img").src=users[index].profilepic;
    select(".badge h5").textContent=users[index].pendingmessages;
    select(".location h3").textContent=users[index].location;
    select(".name h1:nth-child(1)").textContent=users[index].name;
    select(".name h1:nth-child(2)").textContent=users[index].age;

    var clutter="";
    users[index].interests.forEach(function(interests){
        clutter+=`
        <div class="tag px-2 py-1 flex items-center justify-center bg-white/30 rounded-full gap-3">
               ${interests.icon}
                <h3 class="text-sm  tradcking-tight capitalize">${interests.interest}</h3>
            </div>
            `
    })
    select(".tags").innerHTML=clutter;

    select(".bio p").textContent=users[curr].bio;
   
}

(function setInitial(){
        select(".maincard img").src=users[curr].displaypicture;
        select(".incoming img").src=users[curr+1]?.displaypicture;

        setData(curr);

        curr=2;
})();

function imgchange() {
    if(!isAnimating)
    {
      isAnimating=true;
        let ta =gsap.timeline({
            onComplete:function(){
                isAnimating=false;
                let main=select(".maincard");
                let inc=select(".incoming");
    
                inc.classList.remove("z-[2]");
                inc.classList.add("z-[3]");
                inc.classList.remove("incoming");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1,
                })
                if(curr==users.length)curr=0;
                select(".maincard img").src=users[curr].displaypicture;
                curr++;
                main.classList.remove("maincard");
                inc.classList.add("maincard");
                main.classList.add("incoming");
            }
        });
    
        ta.to(".maincard", {
            scale:1.1,
            opacity:0,
            ease:Power2,
            duration: .9, 
        },"a")
    
        .from(".incoming",{
            scale:.9,
            opacity:0,
            ease:Power2,
            duration:1.5,
        },"a")
    }
    
}

let deny= select(".deny");
let accept= select(".accept");

deny.addEventListener("click", function(){
        imgchange();
        setData(curr-1);
        gsap.from(".details .element",{
            y:"100%",
            opacity:0,
            stagger:.06,
            ease:Power4.easeInOut,
            duration:1.5,
        })
});

accept.addEventListener("click", function(){
    imgchange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease:Power4.easeInOut,
        duration:1.5,
    })
});


(function containerCreator(){
    document.querySelector(".element")
    .forEach(function(lelement){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

