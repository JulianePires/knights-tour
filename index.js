const desenhaTabuleiro = side => {
  
  for(let i = 0; i < 8; ++i)
    for (let j = 0; j < 8; ++j) {
      
      const square = document.createElement('div');
      
      const isWhite = (i + j) % 2 == 0;
      
      square.className = `${r}-${c}`;
      square.style.backgroundColor = isWhite ? '#7E57C2' : '#311B92';
      square.style.color = isWhite ? '#311B92' : '#7E57C2';
      square.style.height = side;
      square.style.left = side * c;
      square.style.position = 'absolute';
      square.style.textAlign = 'center';
      square.style.lineHeight = `${side}px`;
      square.style.top = side * r;
      square.style.width = side;
      square.style.zIndex = 0;
      document.body.appendChild(square);
    }
  
  const dim = 32;
  const knight = document.createElement('img');
  knight.src = 'chess.png';
  knight.style.height = dim;
  knight.style.left = 8;
  knight.style.position = 'absolute';
  knight.style.top = 8;
  knight.style.width = dim;
  knight.style.zIndex = 1;
  document.body.appendChild(knight);
}