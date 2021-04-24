Épreuve de programmation pix :

Labyrinthe.png montre le labyrinthe 
solve.js est l'algorithme de résolution 

Important : 

x = 0 = A
x = 1 = B
x = 2 = C
x = 3 = D
x = 4 = E

y commence à 0 dans cette algo. Faites donc attention, la valeur finale serra de y+=1


Le pion est en A2. 
Cet algorithme décrit son déplacement case par case : 
droite() 
répéter 247 fois { 
	si triangle{ 
		haut() 
	}sinon si croix{ 
		droite() 
	}sinon si étoile{ 
		bas() 
	}sinon si coeur{ 
		gauche() 
	} 
} 
haut() 
droite() 
haut() 
Dans quelle case le pion arrive-t-il ? 

