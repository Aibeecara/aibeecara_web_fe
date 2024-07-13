import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import Navbar from '../components/NavBar'

const firebaseConfig = {
	apiKey: 'AIzaSyDy4EwxDKYwp7VQ4w16h9VDHL7h6FzMbvo',
	authDomain: 'aibeecara-firebase.firebaseapp.com',
	databaseURL:
		'https://aibeecara-firebase-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'aibeecara-firebase',
	storageBucket: 'aibeecara-firebase.appspot.com',
	messagingSenderId: '924114369741',
	appId: '1:924114369741:web:8ba039643ddb4af2357d84',
	measurementId: 'G-CGW546YEQ6',
}

initializeApp(firebaseConfig)
const db = getFirestore()

const FeedbackResults = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'feedback'))
			const feedbackData = querySnapshot.docs.map((doc) => doc.data())
			setData(feedbackData)
		}

		fetchData()
	}, [])

	const totalResponses = data.length

	const calculateStats = (questionIndex) => {
		const counts = {}
		data.forEach((feedback) => {
			const answer = feedback[`question${questionIndex + 1}`]
			counts[answer] = (counts[answer] || 0) + 1
		})
		return counts
	}

	const questions = [
		'Apakah kamu merasa paham dengan pembelajaran bahasa Inggris yang diajarkan di sekolah?',
		'Apakah kamu pernah merasa minder atau malu saat ingin berlatih speaking dengan orang lain?',
		'Biasanya berapa harga yang rela kamu bayarkan untuk aplikasi penyedia layanan berlatih bahasa bahasa Inggris?',
		'Menurutmu, apakah fitur berlatih speaking dengan karakter virtual akan dapat membantu kamu dalam meningkatkan kemampuan speaking?',
		'Apakah kamu merasa kesulitan dalam mengoperasikan aplikasi aibeecara ini?',
		'Kamu merasa nyaman atau tidak dengan tampilan user interface dari aplikasi aibeecara?',
	]

	const checkboxQuestions = [
		'Selain di sekolah, kamu biasanya belajar bahasa Inggris di mana?',
	]

	const longAnswerQuestions = [
		'Kendala apa yang kamu alami selama belajar bahasa Inggris di sekolah?',
		'Apa hal yang kamu tidak suka saat belajar bahasa Inggris di kursus atau media tersebut?',
		'Apa fitur yang kamu inginkan untuk ditambahkan pada aplikasi ini agar pembelajaran bahasa Inggris kamu makin optimal?',
	]

	const renderPieChart = (questionIndex) => {
		const stats = calculateStats(questionIndex)
		const labels = Object.keys(stats)
		const values = Object.values(stats)

		return (
			<div className="my-4 p-4 bg-[#FFE3AE] rounded-2xl shadow-md border-2 border-[#FFB526]">
				<h3 className="text-lg font-bold mb-2">{questions[questionIndex]}</h3>
				<p className="text-sm">Total Responses: {totalResponses}</p>
				<div className="relative h-64 w-full">
					<Doughnut
						data={{
							labels,
							datasets: [
								{
									label: `Responses for ${questions[questionIndex]}`,
									data: values,
									backgroundColor: [
										'rgba(186, 33, 0, 1.0)',
										'rgba(255, 77, 38, 1.0)',
										'rgba(255, 142, 38, 1.0)',
										'rgba(255, 181, 38, 1.0)',
									],
								},
							],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							plugins: {
								tooltip: {
									callbacks: {
										label: function (context) {
											const percentage = (
												(context.raw / totalResponses) *
												100
											).toFixed(2)
											return `${context.label}: ${context.raw} (${percentage}%)`
										},
									},
								},
							},
						}}
					/>
				</div>
			</div>
		)
	}

	const renderCheckboxChart = () => {
		const checkboxCounts = {}
		data.forEach((feedback) => {
			feedback.checkboxQuestion1.forEach((answer) => {
				checkboxCounts[answer] = (checkboxCounts[answer] || 0) + 1
			})
		})

		const labels = Object.keys(checkboxCounts)
		const values = Object.values(checkboxCounts)

		return (
			<div className="my-4 p-4 bg-[#FFE3AE] rounded-2xl shadow-md border-2 border-[#FFB526]">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkbox Answer Responses</h2>
				<h3 className="text-lg font-bold mb-2">{checkboxQuestions[0]}</h3>
				<p className="text-sm">Total Responses: {totalResponses}</p>
				<div className="relative h-64 w-full">
					<Doughnut
						data={{
							labels,
							datasets: [
								{
									label: 'Checkbox Responses',
									data: values,
									backgroundColor: [
										'rgba(186, 33, 0, 1.0)',
										'rgba(255, 77, 38, 1.0)',
										'rgba(255, 142, 38, 1.0)',
										'rgba(255, 181, 38, 1.0)',
									],
								},
							],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							plugins: {
								tooltip: {
									callbacks: {
										label: function (context) {
											const percentage = (
												(context.raw / totalResponses) *
												100
											).toFixed(2)
											return `${context.label}: ${context.raw} (${percentage}%)`
										},
									},
								},
							},
						}}
					/>
				</div>
			</div>
		)
	}

	const renderLongAnswers = () => {
		const longAnswerKeys = Array.from(
			{ length: longAnswerQuestions.length },
			(_, index) => `longAnswer${index + 1}`
		)
		return (
			<div className="p-4 bg-[#FFE3AE] rounded-2xl shadow-md border-2 border-[#FFB526]">
				<h2 className="text-2xl font-bold mb-4 text-center">Long Answer Responses</h2>
				{longAnswerKeys.map((key, index) => (
					<div key={key} className="mb-4">
						<h4 className="font-semibold">{longAnswerQuestions[index]}</h4>
						{data.map((feedback, index) => (
							<p
								className="border-2 rounded-xl bg-white p-2 mb-2"
								key={index}
							>
								{feedback[key]}
							</p>
						))}
					</div>
				))}
			</div>
		)
	}

	return (
		<div className=" p-4 bg-white mt-10">
      <Navbar />
			<h1 className="text-2xl font-bold mt-4 text-center">Hasil Feedback</h1>
			{totalResponses > 0 ? (
				<div>
					{Array.from({ length: questions.length }).map((_, index) =>
						renderPieChart(index)
					)}
					{renderCheckboxChart()}
					{renderLongAnswers()}
				</div>
			) : (
				<p className="text-center mt-4 px-4 py-2 bg-[#FFE3AE] border-2 rounded-xl border-[#FFB526]">Tidak ada satupun responden!</p>
			)}
		</div>
	)
}

export default FeedbackResults
