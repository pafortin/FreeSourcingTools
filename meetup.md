## 📌 Meetup Attendees Scraper (Bookmarklet)

Ce bookmarklet permet d’exporter automatiquement en CSV la liste des participants (attendees) des événements passés d’un groupe Meetup.

Il est conçu pour être lancé depuis la page “Past Events” d’un groupe Meetup.

⸻

## 🎯 Pourquoi utiliser ce scraper ?

L’intérêt principal n’est pas seulement de collecter des noms, mais de pratiquer du behavioral sourcing (sourcing comportemental).

En agrégeant les participants sur plusieurs événements, on peut :
	* Mesurer la fréquence de participation d’une même personne sur différents meetups.
	* •	Identifier les membres actifs d’une communauté (au-delà des simples inscriptions ponctuelles).
	•	Repérer des leaders d’opinion, des passionnés ou des experts très impliqués sur une techno, un sujet ou une communauté.

En pratique, une fois les données exportées, il suffit de les analyser dans un tableur (ex. tableau croisé dynamique) ou un outil de data-visualisation pour dégager des patterns d’implication et cibler les bons profils.

👉 C’est un complément puissant au sourcing traditionnel, qui permet de qualifier les candidats non pas uniquement par leur CV, mais aussi par leur comportement réel dans l’écosystème.

⸻

## 🚀 Fonctionnement
	1.	Se placer sur la page des événements passés d’un groupe Meetup, par ex. :

https://www.meetup.com/<NOM_DU_GROUPE>/events/past/


	2.	Charger manuellement la liste complète des événements en cliquant sur les boutons
See more events / Voir plus d’événements.
	3.	Lancer le bookmarklet depuis la barre de favoris de votre navigateur.
	•	Une petite fenêtre flottante s’affiche avec une barre de progression.
	•	Le script détecte tous les événements visibles sur la page.
	•	Pour chaque événement, il appelle l’API GraphQL de Meetup et récupère la liste des participants.
	4.	Export CSV : une fois terminé, un fichier nommé

meetup_attendees.csv est automatiquement généré et téléchargé.

⸻

## 📦 Données extraites

Chaque ligne du CSV correspond à un participant, avec les colonnes suivantes :
	•	eventId → identifiant de l’événement
	•	memberName → nom du membre
	•	memberId → identifiant du membre
	•	status → statut (YES, ATTENDED, …)
	•	guests → nombre d’invités accompagnants

⸻

## ⚠️ Limitations
	•	Le bookmarklet ne scroll pas indéfiniment :
👉 il faut d’abord charger manuellement les événements en défilant vers le bas “See more events”.
	•	L’extraction ne fonctionne que sur les pages Past Events.
	•	L’API Meetup peut limiter le nombre de requêtes en cas d’utilisation trop intensive.

⸻

Veux-tu que je te propose aussi une section exemples d’usage concret (par ex. : “repérer les Data Scientists les plus actifs sur Paris”, “identifier les contributeurs réguliers en cybersécurité”, etc.), pour rendre ton README plus vivant et directement exploitable par un recruteur ?
