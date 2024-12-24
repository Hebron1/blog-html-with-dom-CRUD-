// function getPosts() {
//     const posts = localStorage.getItem('posts');
//     return posts ? JSON.parse(posts) : [];
// }

// function savePosts(posts) {
//     localStorage.setItem('posts', JSON.stringify(posts));
// }

let posts = [
    {
        id: 1,
        title: "The Forest: A Thrilling Survival Game Experience",
        content: "The Forest is a survival horror game developed by Endnight Games, offering an immersive and intense experience for players who enjoy a mix of survival mechanics and suspenseful gameplay. Released in 2014 in early access and officially launched in 2018, The Forest quickly gained popularity due to its unique gameplay, terrifying atmosphere, and intricate survival mechanics. Set in a mysterious forest after a plane crash, players must survive by scavenging, crafting, and fighting off hostile creatures in an open-world environment. The game’s premise is straightforward: you are the lone survivor of a plane crash that leaves you stranded in a remote forest. As you search for your missing son, you must learn to adapt to your surroundings, gather resources, and protect yourself from the dangers lurking in the wilderness. Players must manage hunger, thirst, health, and sanity while exploring the vast and dangerous world. The environment is dynamic, with weather patterns, day-night cycles, and wildlife adding to the challenges of survival. Crafting plays a significant role in The Forest. Players can create weapons, tools, and shelters using materials found in the environment, such as wood, stone, and cloth."
    },{
        id: 2,
        title: "Sons of the Forest: The Highly Anticipated Survival Horror Sequel",
        content: "Sons of the Forest is the highly anticipated sequel to the popular survival horror game The Forest, developed by Endnight Games. Released in early access in February 2023, Sons of the Forest builds upon the foundations of its predecessor while introducing new gameplay mechanics, more immersive graphics, and a deeper storyline. Set in the same mysterious forest, players are thrown into an even more perilous and terrifying environment as they struggle to survive, explore, and uncover the dark secrets of the island. The premise of Sons of the Forest follows a similar survival narrative to The Forest. Players are once again stranded on a mysterious island, this time after a helicopter crash. As part of a rescue mission, you are tasked with finding a missing billionaire and his crew, but things quickly take a turn for the worse. The island is home to new, even more terrifying threats, including mutated creatures, hostile factions, and other supernatural forces. The game continues the theme of isolation, survival, and horror while delving deeper into the island’s eerie mysteries."
    }
    ,{
        id: 3,
        title: "S.T.A.L.K.E.R.: A Journey into the Post-Apocalyptic Wasteland",
        content: "The S.T.A.L.K.E.R. series is a critically acclaimed franchise that combines elements of survival horror, first-person shooting, and open-world exploration. Developed by the Ukrainian studio GSC Game World, the series has captivated players with its unique blend of atmospheric storytelling, realistic environments, and a tense, immersive gameplay experience. The series' first title, S.T.A.L.K.E.R.: Shadow of Chernobyl, was released in 2007, and it quickly became a cult classic. Set in an alternate reality where the Chernobyl nuclear disaster of 1986 led to the creation of a mysterious 'Zone,' the S.T.A.L.K.E.R. games explore the aftermath of this catastrophe. The Zone is a dangerous, mutated landscape filled with deadly anomalies, radiation hotspots, and hostile creatures. Players take on the role of a 'Stalker,' a scavenger who ventures into the Zone in search of valuable artifacts, uncovering its many secrets while trying to survive the harsh environment. The open-world setting of S.T.A.L.K.E.R. is one of its most distinctive features. Unlike many linear shooters, the game gives players the freedom to explore a vast, dynamic world. The environment is filled with abandoned structures, eerie forests, and desolate towns, all designed with incredible attention to detail. Players can choose how they wish to navigate the Zone, whether by engaging in combat with mutant creatures, completing quests for various factions, or simply exploring the area for rare items and artifacts."
    }
]

// savePosts(posts)

let content_edited = null;

function renderPost() {

const element = document.getElementById("article");
element.innerHTML = "";

posts.map((post, index) => {
    
    const addh5 = document.createElement("h5")
    const addp = document.createElement("p")
    
    addh5.setAttribute("id","title");
    addp.setAttribute("id", "content")
    
    addh5.textContent = post.title;
    addp.textContent = post.content;
    
    element.appendChild(addh5)
    element.appendChild(addp)

    const addEditButton = document.createElement("button");
    const addDeleteButton = document.createElement("button");
    const addAnchor = document.createElement("a");
    
    addEditButton.setAttribute("class", "btn btn-primary m-2 mb-3");
    addEditButton.setAttribute("id", "edit");
    addEditButton.setAttribute("type", "button")
    addEditButton.setAttribute("data-bs-toggle", "modal")
    addEditButton.setAttribute("data-bs-target", "#modal-edit")
    addDeleteButton.setAttribute("class", "btn btn-danger m-2 mb-3");
    // addDeleteButton.setAttribute("id", "delete");
    
    addEditButton.textContent = "Edit";
    addDeleteButton.textContent = "Delete";
    
    addAnchor.setAttribute("href", "#myEditForm");
    addAnchor.appendChild(addEditButton);

    element.appendChild(addAnchor)
    element.appendChild(addDeleteButton)

    addDeleteButton.addEventListener("click", function() {
        const question = confirm("Are you sure, you want to delete?")
        if (question) {
        // addh5.remove();
        // addp.remove();
        // addEditButton.remove();
        // addDeleteButton.remove();

        posts = posts.filter(po => po.id !== post.id)
        renderPost();
        }
    })

    addEditButton.addEventListener("click", () => {

        const editTitle = document.getElementById("myEditText");
        const editContent = document.getElementById("myEditContent");
        
        content_edited = posts.find(po => po.id === post.id);
        
        editTitle.value = post.title;
        editContent.value = post.content;
        
        alert(`YOU ARE EDIT: ${post.title}`);
    })

})
}

renderPost();

const myEditForm = document.getElementById("myEditForm");

    myEditForm.addEventListener("submit", (event) => {
        
        event.preventDefault();

        
        if (content_edited) {

            const editTitle = document.getElementById("myEditText").value;
            const editContent = document.getElementById("myEditContent").value;
            
            content_edited.title = editTitle;
            content_edited.content = editContent;

            alert("Done!")
            
            renderPost();
        }
        
    })

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    
    const text = document.getElementById("myText").value;
    const content = document.getElementById("myContent").value;
    

    const newPost = {
        id: posts.length + 1,
        title: text,
        content: content
    }

    // alert(text)
    // alert(content)
    // alert(JSON.stringify(newPost))

    if (text && content) {

    posts.push(newPost);
    alert("You success to add")
    renderPost();
    }
    
})