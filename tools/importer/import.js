// export default {
//     //document object-->represents HTML DOM-->contains structure of webpage
//     transformDOM: ({ document }) => {
//       const main = document.querySelector('main'); //main element selected--contains core content of webpage
//       main.querySelector('header, footer').forEach(el => el.remove());
//       return main; //returns main after removing the specified elements
//     },
//   };


//for adding any class--> use .('header,footer, .class_name')


export default {
    //document object-->represents HTML DOM-->contains structure of webpage
    transformDOM: ({ document }) => {
      const main = document.querySelector('main'); //main element selected--contains core content of webpage
      // Simply return the main element without removing header or footer
      return main; //returns main without removing header and footer
    },
  };
  