* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

button {
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

input:focus,
button:focus {
  outline: none;
}

header {
  background-image: url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  position: relative;
}

header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

header * {
  z-index: 1;
}

header h1 {
  margin: 0 0 30px;
}

form {
  position: relative;
  width: 500px;
  max-width: 100%;
}

form input {
  border: 0;
  border-radius: 50px;
  font-size: 16px;
  padding: 15px 30px;
  width: 100%;
}

form button {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #e056fd;
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  padding: 13px 30px;
}

.btn {
  background-color: #8d56fd;
  border: 0;
  border-radius: 10px;
  color: #fff;
  padding: 4px 10px;
}

ul.songs {
  list-style-type: none;
  padding: 0;
}

ul.songs li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.container {
  margin: 30px auto;
  max-width: 100%;
  width: 500px;
}

.container h2 {
  font-weight: 300;
}

.container p {
  text-align: center;
}

.centered {
  display: flex;
  justify-content: center;
}

.centered button {
  transform: scale(1.3);
  margin: 15px;
}