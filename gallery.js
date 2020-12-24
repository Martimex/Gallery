
let el = document.querySelectorAll(".thumbnail-img");

el.forEach(item => {
    item.addEventListener('click', e => {

    let mainimg = document.querySelector(".displayed-img");
    let src = e.target.getAttribute("src");
    mainimg.setAttribute('src', src);

    mainimg.dataset.which = e.target.dataset.which;

    })
})

el.forEach(item => {
    item.addEventListener('mouseover', e=> {

    e.target.style.backgroundColor = "rgba(0,0,0,0.5)";
    e.target.style.filter = "opacity(60%)";
    e.target.style.border = "0.2em solid #6a838b";
    })

   item.addEventListener('mouseout', e=> {

    e.target.style.backgroundColor = "rgba(0,0,0,0)";
    e.target.style.filter = "opacity(100%)";
    e.target.style.border = "0.2em solid #303030";
   }) 
})

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

let change = document.querySelectorAll('.overlay');
let onlychild = change.firstChild;

console.log(onlychild)

change.forEach(item => { 
    item.addEventListener('mouseover', ev => {
        ev.target.style.backgroundColor = "#222";
        if(ev.target.children.length > 0) {
          const myChild = ev.target.firstElementChild;
          myChild.style.backgroundColor = "#222"; 
          myChild.style.color = "yellow";
        }  

      }) 
    item.addEventListener('mouseout', ev=> {
       ev.target.style.backgroundColor = "#303030";
      if(ev.target.children.length > 0) { 
       const myChild = ev.target.firstElementChild;
       myChild.style.backgroundColor = "#303030"; 
       myChild.style.color = "#111";
      }

    })

    item.addEventListener('click', ev =>  {

      const overlay = ev.target;

      if(overlay.dataset.number === '1')
      {
        let mainimg = document.querySelector(".displayed-img");
        let lowerimg = mainimg.dataset.which;

        if(lowerimg > 1)
        {
          let src = mainimg.getAttribute("src");
          let num = src.indexOf('.')-4;
          let oldnums = src.slice(num, num+4);
          let fournums = parseInt(oldnums);
          fournums = fournums-1;
          fournums = fournums.toString();

          while(fournums.length < 4)
          {
             fournums = "0"+fournums;
          }
 
          src = src.replace(oldnums, fournums);
          console.log("newsrc = "+src)
          mainimg.setAttribute("src", src);
          mainimg.dataset.which--;
        }
      }

      else if(overlay.dataset.number === '2')
      {
        let mainimg = document.querySelector(".displayed-img");
        let lowerimg = mainimg.dataset.which;

        if(lowerimg < 9) // last image index :(
        {
          let src = mainimg.getAttribute("src");
          let num = src.indexOf('.')-4;
          let oldnums = src.slice(num, num+4);   // 0011
          let fournums = parseInt(oldnums);
          console.log("fournums: "+fournums);
          fournums = fournums+1;
          console.log(fournums);
          fournums = fournums.toString();

          while(fournums.length < 4)
          {
            fournums = "0"+fournums;
          }

          src = src.replace(oldnums, fournums);
          console.log("newsrc = "+src)
          mainimg.setAttribute("src", src);
          mainimg.dataset.which++;
        }
      }
    })
})


let switchsection  = document.querySelectorAll(".switch-section > i");

switchsection.forEach(section => {
  section.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "#303030";
    event.target.style.color = "yellow";
    event.target.style.cursor = "pointer";
  })

  section.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "#303030";
    event.target.style.color = "#111";

  })

  section.addEventListener("click", event => {

    const arrows = event.target;

    const firstThumbnail = document.querySelector(".thumbnail-img");

    let thumbnailSrc = firstThumbnail.getAttribute("src"); 
    let dot = thumbnailSrc.indexOf(".")-4;
    let thatSection = thumbnailSrc.slice(dot, dot+4);
    let onlySection = thatSection.slice(0, 3);
    let onlyNumber = thatSection.slice(-1);
    //console.log("thatSection: "+thatSection);
    //console.log("onlySection: "+onlySection);
    //console.log("onlyNumber: "+onlyNumber);

    //console.log("link do przerobienia: "+thumbnailSrc);

    if(arrows.dataset.arrow === "1")
    {
     
      //let miś = new Notification("U nas kolega mówił że jego mama ma słabszy węch po koronawirusie")
      //  0. Tak BTW - sprawdź sobie notification dla JS    - potem może się przydać
      //  1. pobieramy numer obrazka z właściwości scr;
      //  2. dzielimy: 3 pierwsze cyfry oznaczają która to sekcja zdjęć (000 - 999), a ostatnia cyfra (1-9) które zdjęcie;
      //  3. po dostaniu się do danych za pomocą firstThumbnail mamy gotową informację, który to jest rząd;
      //  4. w zależności od strzałki: dodajemy lub odejmujemy numer sekcji o 1;
      //  5. oczywiście if: jeśli to pierwsza / ostatnia sekcja, to nic nie zmieniaj;
      //  6. dla forEach ustawiamy nową sekcję dla obrazków, no i nie trzeba to zmieniać ich ostatniego numeru, bo zawsze są one takie same?;
    
      let sekcja = parseInt(onlySection); // pierwsze trzy literki sekcji
      sekcja = sekcja-1;
      //console.log("Sekcja ( liczba) " +sekcja )

      if(sekcja >=0)
      {
        console.log("Sekcja ( liczba) " +sekcja )
        sekcja = sekcja.toString();

        while(sekcja.length < 3)
        {
          sekcja = '0'+sekcja;
        }

        //console.log("Sekcja to: "+sekcja);  //2  nowa sekcja

        let count = 0;

        const thumbnails = document.querySelectorAll(".thumbnail-img");
        thumbnails.forEach(thumbnail => {

        //let newImageSource = thumbnailSrc;

        let startSrc = thumbnailSrc.slice(0,dot);   
        //console.log(startSrc);             //1     początek linka

      

        let lastonlySection = thatSection.slice(-1);
        lastonlySection = parseInt(lastonlySection);
        lastonlySection = lastonlySection + count; 
        //console.log(lastonlySection);       //3     czwarta cyferka sekcji
        count++;
      
        let finish = ".jpg";  // mało to eleganckie, no ale potem można zmienić na bardziej skalowalną alternatywę;

        let newImageSource = startSrc + sekcja + lastonlySection + finish;

        thumbnail.src = newImageSource;

        //console.log("Nowy link :"+thumbnail.src);
        })

        let mainimg = document.querySelector(".displayed-img");
        let firstNewImg = document.querySelector(".thumbnail-img");
        let src = firstNewImg.getAttribute("src");
        mainimg.setAttribute('src', src);

        mainimg.dataset.which = firstNewImg.dataset.which;
      }  
    }

    else if(arrows.dataset.arrow === "2")
    {

      let sekcja = parseInt(onlySection); // pierwsze trzy literki sekcji
      sekcja = sekcja+1;
      //console.log("Obecny numer sekcji: "+sekcja)

      if(sekcja <=3)     // czyli maksymalna liczba sekcji to 3+1 = 4 !!!!!!!!!!!!!!!!!!!!!!!!!
      {

        console.log("Obecny numer sekcji: "+sekcja)
        sekcja = sekcja.toString();

        while(sekcja.length < 3)
        {
          sekcja = '0'+sekcja;
        }

        //console.log("Sekcja to: "+sekcja);  //2  nowa sekcja

        let count = 0;

        const thumbnails = document.querySelectorAll(".thumbnail-img");
        thumbnails.forEach(thumbnail => {

        //let newImageSource = thumbnailSrc;

        let startSrc = thumbnailSrc.slice(0,dot);   
        //console.log(startSrc);             //1     początek linka

      

        let lastonlySection = thatSection.slice(-1);
        lastonlySection = parseInt(lastonlySection);
        lastonlySection = lastonlySection + count; 
        //console.log(lastonlySection);       //3     czwarta cyferka sekcji
        count++;
      
        let finish = ".jpg";  // mało to eleganckie, no ale potem można zmienić na bardziej skalowalną alternatywę;

        let newImageSource = startSrc + sekcja + lastonlySection + finish;

        thumbnail.src = newImageSource;

        })
        let mainimg = document.querySelector(".displayed-img");
        let firstNewImg = document.querySelector(".thumbnail-img");
        let src = firstNewImg.getAttribute("src");
        mainimg.setAttribute('src', src);

        mainimg.dataset.which = firstNewImg.dataset.which;
      }  
    }
 
  })
})
