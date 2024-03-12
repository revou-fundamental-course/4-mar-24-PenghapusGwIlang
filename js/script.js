const calcBMI = (weight, height) => {
  return weight / Math.pow(height / 100, 2)
}

const bmiDescription = {
  underweight:
    "Berat badan Anda tergolong kurang ideal. Hal ini dapat meningkatkan risiko kesehatan seperti anemia, osteoporosis, dan sistem kekebalan tubuh yang lemah. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran diet sehat dan program olahraga yang tepat untuk meningkatkan berat badan secara bertahap.",
  normal:
    "Berat badan Anda ideal dan tergolong sehat. Pertahankan pola makan seimbang dan aktif bergerak untuk menjaga kesehatan. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan panduan diet dan olahraga yang optimal untuk menjaga berat badan ideal.",
  overweight:
    "Berat badan Anda sedikit di atas ideal. Hal ini dapat meningkatkan risiko kesehatan seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan program diet dan olahraga yang tepat untuk menurunkan berat badan secara bertahap.",
  Obesity:
    "Berat badan Anda tergolong obesitas. Hal ini dapat meningkatkan risiko kesehatan yang serius seperti penyakit jantung, stroke, diabetes tipe 2, dan kanker. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan program diet dan olahraga yang intensif untuk menurunkan berat badan secara signifikan. Dalam beberapa kasus, pengobatan medis mungkin diperlukan.",
}

const categoryBMI = document.querySelector("#bmi-category")
const bmiCategory = (bmi) => {
  if (bmi < 18.5) {
    categoryBMI.classList.add("text-yellow")
    categoryBMI.classList.remove("text-red")
    categoryBMI.classList.remove("text-green")
    document.querySelector("#bmi-description").textContent =
      bmiDescription.underweight
    return "Underweight"
  } else if (bmi < 24.9) {
    categoryBMI.classList.remove("text-yellow")
    categoryBMI.classList.remove("text-red")
    categoryBMI.classList.add("text-green")
    document.querySelector("#bmi-description").textContent =
      bmiDescription.normal
    return "Normal"
  } else if (bmi < 29.9) {
    categoryBMI.classList.add("text-yellow")
    categoryBMI.classList.remove("text-red")
    categoryBMI.classList.remove("text-green")
    document.querySelector("#bmi-description").textContent =
      bmiDescription.overweight
    return "Overweight"
  } else {
    categoryBMI.classList.remove("text-yellow")
    categoryBMI.classList.add("text-red")
    categoryBMI.classList.remove("text-green")
    document.querySelector("#bmi-description").textContent =
      bmiDescription.Obesity
    return "Obesity"
  }
}

const bmiForm = document.querySelector("#bmi-form")

function handleSubmit(e) {
  e.preventDefault()

  const weight = document.querySelector("#bb").value
  const height = document.querySelector("#tb").value
  const bmi = calcBMI(weight, height)
  const category = bmiCategory(bmi)

  document.querySelector("#bmi-result").textContent = bmi.toFixed(1)
  categoryBMI.innerHTML = category
}

function reset(e) {
  e.preventDefault()

  document.querySelector("#bmi-result").innerHTML = "-"
  categoryBMI.textContent = ""
  bmiForm.reset()
}

bmiForm.addEventListener("submit", handleSubmit)
document.querySelector(".reset").addEventListener("click", reset)
