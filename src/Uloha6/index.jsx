import React, { useState } from 'react'
import './ukol.css'

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ nazev }) => {
	const [splneno, setSplneno] = useState(false);

	return (
		<li className="ukol">
			<span className={"ukol__nazev " + (splneno && `ukol--splnen`)}>{nazev}</span>
			{!splneno && (
			<button className="ukol__akce"
			onClick={()=>{setSplneno(true)}}
			>splnit</button>)}
		</li>
	)
}

const Uloha6 = () => {
	const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']



	return (
		<ul>
			{
				ukoly.map(ukol =>  <Ukol nazev={ukol} /> )
			}
		</ul>
	)
}

export default Uloha6;
