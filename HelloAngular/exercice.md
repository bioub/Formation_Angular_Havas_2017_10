# Exercice Todolist

* Créer un nouveau projet minimal avec en prefix todo
* Générer un composant container

Avec le template suivant :

```
<form>
  <input>
  <button>+</button>
</form>
<ul>
  <li>Todo 1</li>
  <li>Todo 2</li>
  <li>Todo 3</li>
</ul>
```

Binding events :
- (input) sur l'input (créé une prop)
- (submit) sur le form (ajoute à un table)

Binding
- ngFor
- interpoler

# Suite

* Créer 3 composants supplémentaire
  * form
  * list
  * details
  
* form 
```
<form>
  <input>
  <button>+</button>
</form>
```

* list
```
<div>
  <todo-details *ngFor="let t of todos" [todo]="t"></todo-details>
</div>
```

* details

Affiche la todo
