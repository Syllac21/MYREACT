import fondationCover from '../images/Fondation.jpg';
import EragonCover from '../images/Eragon.jpg';
import HarryPotter1 from '../images/HarryPotter1.jpg';

export const BooksList = [
	{
		id: 'FondAs',
		category:'sciences-fiction',
		title: 'Fondation',
		author: 'Isaac Asimov',
		description: "En ce début de treizième millénaire, l'Empire n'a jamais été aussi puissant, aussi étendu à travers toute la galaxie. C'est dans sa capitale, Trantor, que l'éminent savant Hari Seldon invente la psychohistoire, une science nouvelle permettant de prédire l'avenir. Grâce à elle, Seldon prévoit l'effondrement de l'Empire d'ici cinq siècles, suivi d'une ère de ténèbres de trente mille ans. Réduire cette période à mille ans est peut-être possible, à condition de mener à terme son projet : la Fondation, chargée de rassembler toutes les connaissances humaines. Une entreprise visionnaire qui rencontre de nombreux et puissants détracteurs...",
		cover: fondationCover
	},
	{
		id: 'EragPa',
		category:'Héroïque Fantasy',
		title: 'Eragon',
		author: 'Christopher Paolini',
		description: "L’histoire prend place en Alagaësia, un univers fantastique dans lequel évoluent différentes espèces : des elfes, des nains, des humains, des urgals, des chats-garous et des dragons. Le livre suit les aventures d’un garçon nommé Eragon, qui découvre dans la montagne une mystérieuse pierre bleue, qui s’avère être un œuf de dragon. L'œuf éclot, et en sort une dragonne qu’il nomme Saphira. Le tyrannique roi Galbatorix envoie ses sbires monstrueux sur les traces de l'œuf, forçant Eragon et Saphira à fuir leur village en compagnie du conteur Brom, un ancien dragonnier, dont Eragon devient l’apprenti.",
		cover: EragonCover
	},
	{
		id: 'Hp1Ro',
		category:'Fantasy',
		title: 'Harry Potter à l\'école des sorciers',
		author: 'J.K Rowling',
		description: "Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée. Un géant vient le chercher pour l'emmener à Poudlard, une école de sorcellerie ! Voler en balai, jeter des sorts, combattre les trolls : Harry se révèle un sorcier doué. Mais un mystère entoure sa naissance et l'effroyable V., le mage dont personne n'ose prononcer le nom.",
		cover: HarryPotter1
	}
]