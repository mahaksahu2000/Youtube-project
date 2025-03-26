import React from 'react'

const commentsData =  [
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [],
  },
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [ 
      {
      name: "Mahak Sahu",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replices: [],
    }, 
    {
      name: "Mahak Sahu",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replices: [
        {
          name: "Mahak Sahu",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replices: [
            {
              name: "Mahak Sahu",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replices: [
                {
                  name: "Mahak Sahu",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replices: [
                    {
                      name: "Mahak Sahu",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replices: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }, 
  ],
},
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [],
  },
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [],
  },
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [],
  },
  {
    name: "Mahak Sahu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replices: [],
  },
]

 const Comment = ({ data }) => {
  const { name, text, replices } = data;
  return(
       <div className='flex'>
  <img className='img'
  alt='user' 
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s'></img>
  <div>
    <p className='font-size'>{name}</p>
    <p className='text'>{text}</p>
  </div>
    </div>
  );
 };


 const CommentsList = ({ comments }) => {
  //  Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => 
    <div key={index}>
     <Comment data={comment}/>
     <div className='data'>
      <CommentsList comments={comment.replices}/>
     </div>
     </div>
     
     );
      };
   

 

const CommentsContainer = () => {
  return (
    <div className='commentContainer'>
      <h1 className='comment'>Comments:</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentsList comments={commentsData}/>

    
    </div>
  )
}

export default CommentsContainer;
