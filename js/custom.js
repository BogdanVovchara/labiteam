$(document).ready(function() {
    $(".filter select").chosen();
});
const posts = document.querySelector('.posts');
let name, options = {},
    description, category, skils, client = {};
let incoming = {
    "posts": [{
            "name": "SEO Review and Reccomendations",
            "options": {
                "fixed": "Regular",
                "budget": 300,
                "delivery": "Urgent",
                "posted": "12 minutes ago",
                "ends": "14d, 23h",
                "proposals": 0
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
            "category": "Search Engine",
            "slils": [{
                    "id": 1,
                    "name": "net-framework"
                },
                {
                    "id": 2,
                    "name": "рhp"
                }
            ],
            "client": {
                "country": "United states",
                "rating": 4.8
            }
        },
        {
            "name": "SEO Review and Reccomendations",
            "options": {
                "fixed": "Regular",
                "budget": 300,
                "delivery": "Urgent",
                "posted": "12 minutes ago",
                "ends": "14d, 23h",
                "proposals": 0
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
            "category": "Search Engine",
            "slils": [{
                    "id": 1,
                    "name": "net-framework"
                },
                {
                    "id": 2,
                    "name": "рhp"
                }
            ],
            "client": {
                "country": "United states",
                "rating": 4.8
            }
        }
    ]
}
for (let article of incoming.posts) {
    ({ name, options, description, category, slils: skils, client } = article);
    description.replace('...more', '... <a class="title-color" href="#">more</a>');
    let skilItems = skils.map(function(i) {
            return `<span id="${i.id}">${i.name}</span>`;
        }

    ).join('\n');
    let post = `
<article class="post"><h4 class="post-title title-color">${name}</h4>
                <div class="part-options">
                    <span class="fixed"><span>Fixed:</span> <span>${options['fixed']}</span></span>
                    <span class="budget"><span>Budget:</span> <span>$${options['budget']}</span></span>
                    <span class="delivery"><span>Delivery:</span> <span>${options['delivery']}</span></span>
                    <span class="posted"><span>Posted:</span> <span>${options['posted']}</span></span>
                    <span class="ends"><span>Ends:</span> <span>${options['ends']}</span></span>
                    <span class="proposals title-color"><span>${options['proposals']}</span> <span>Proposals</span></span>
                </div>
                <div class="description">${description}</div>
                <div class="part-options">
                    <span class="category"><span>Category:</span> <span>${category}</span></span>
                    <span class="skils">
                <span>Skills:</span></span>
                    ${skilItems}
                    <a class="title-color" href="#"><span>18</span> more</a>
                    <span class="country"><span>Client:</span> <span>${client['country']}</span></span> <span class="rating">${client['rating']}&nbsp;<img src="img/stars.png" alt=""></span>
                </div>`;


    posts.insertAdjacentHTML("beforeEnd", post)

}