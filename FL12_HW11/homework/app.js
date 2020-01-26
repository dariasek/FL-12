const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');


function treeMaker(mur, myDir){

  let myLength = myDir.length;
  for (let i = 0; i < myLength; i++){

    let li = document.createElement('li');
    let text = document.createTextNode(myDir[i]['title']);
    myDir[i]['folder'] ? li.className = 'folder' : li.className = 'file';

    if(li.className === 'folder'){
      let a = document.createElement('i');
      a.className = 'material-icons';
      let aText = document.createTextNode('folder');
      a.append(aText);
      li.appendChild(a);
    } else {
      let a = document.createElement('i');
      a.className = 'material-icons';
      let aText = document.createTextNode('insert_drive_file');
      a.append(aText);
      li.appendChild(a);
    }
    li.append(text);
    mur.appendChild(li);
    
    if (myDir[i]['children'] instanceof Array){

      let ul = document.createElement('ul');
      mur.appendChild(ul);
      let myDirNew = myDir[i]['children'];
      treeMaker(ul,myDirNew);   

    } else if (myDir[i]['folder']){

      let li = document.createElement('li');
      let text = document.createTextNode('Folder is empty');
      li.className = 'it';
      li.appendChild(text);
      mur.appendChild(li);

    }
  }
}

let ul = document.createElement('ul');
ul.className = 'main-ul'
rootNode.append(ul);

treeMaker(ul,structure);

for(let i=0; i< structure.length; i++){
  structure[i].className = 'folder main-folders';
}


let myList = document.getElementsByClassName('folder')
for (let i=0; i<myList.length; i++){
  myList[i].addEventListener('click', function(){
    this.classList.li('click')
  })
}


