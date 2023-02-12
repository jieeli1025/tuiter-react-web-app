
    const a = 2;
    const b = 1
    document.write("<h2>Arithemetics</h2>" + a+b);
    document.write(`<h2>Arithemetics - backtick</h2>  ${a+b}`);




    document.write("<ul>")
    for (let i = 0; i<3; i++){
        document.write("<li>Alice</li>");
    }
    document.write("</ul>")


    const student = ["Alice", "bob", "charlie"]
    document.write("<ul>")
    for (let i = 0; i<student.length; i++){
        document.write(` <li> ${student[i]}</li>`);
    }
    document.write("</ul>");


    document.write("Json object");
    document.write("<br>")
    const house = {
        rooms:3,
        bath:2,
        sqft:1500
    }


    document.write(`Rooms:${house.rooms}`)
    document.write(`Baths:${house.bath}`)
    document.write(`Sqft:${house.sqft}`)




