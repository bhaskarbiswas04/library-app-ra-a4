
export default function AddBookForm() {
    return (
      <form style={{marginLeft: "5rem"}}>
        <h1>Add a Book</h1>
        <label htmlFor="bookTitle">Title: </label>
        <input id="bookTitle" type="text" />
        <br /> <br />
        <label htmlFor="bookAuthor">Author</label>
        <input id="bookAuthor" type="text" />
        <br /> <br />
        <label htmlFor="bookStatus">Status: </label> 
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Read</label>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">Unread</label>

      </form>
    );
}