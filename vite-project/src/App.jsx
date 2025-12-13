import { useState } from 'react';
import styles from './App.module.css';
import data from '../data.json';



export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	
	let isFirstStep = activeIndex === 0;
	let isLastStep = activeIndex === steps.length -1;
	
	const onClickBack = ()=>{
		if(!isFirstStep){
		setActiveIndex(activeIndex - 1);
		};
	}

	const onClickForward= ()=>{
		console.log('Шаг вперед');
		if(!isLastStep){
			setActiveIndex(activeIndex + 1);
		}
		
	}
	const onClickStartOver =()=>{
		setActiveIndex(0);
	}

	const onClickToStep = (index) => {
		setActiveIndex(index);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}> {
					steps.map((el, index) =>
					
					<li className={
						`${styles['steps-item']}  
						${index === activeIndex ? styles.active : ''}  
						${index <= activeIndex ? styles.done : ''}`
						} 
						key = {el.id}>
						<button onClick = {() => onClickToStep(index)} className={styles['steps-item-button']}>{index+1}</button>
						{el.title}
						</li>
					)}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled = {isFirstStep} onClick = {onClickBack}>Назад</button>
						<button className={styles.button} onClick = {isLastStep ? onClickStartOver : onClickForward}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
