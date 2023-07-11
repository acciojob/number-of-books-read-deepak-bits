const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	return library.reduce((totalCount, book) => {
		totalCount += book.readingStatus ? 1 : 0;
		return totalCount;
	}, 0)
};

// Do not change the code below

alert(numberOfBooksRead());
