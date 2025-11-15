Feature: Ajouter un produit au panier et valider la commande

  Scenario: Ajout d'un article au panier et finalisation de la commande
    Given Je suis sur la page d'accueil
    When J'ajoute le produit vedette au panier
    And Je définis la quantité à 1
    And Je valide le panier
    And Je renseigne les informations de livraison et paiement
    And Je confirme la commande
    Then Je vois la confirmation de la commande
