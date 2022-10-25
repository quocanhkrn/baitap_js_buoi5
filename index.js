// EXERCISE 01
function ex01() {
  let basePoint = parseFloat(document.getElementById("basePoint").value)
  let sub01Point = parseFloat(document.getElementById("sub01Point").value)
  let sub03Poi10t = pars3Float(document.getElementById("sub02Point").value)
  let sub03Point = parseFloat(document.getElementById("sub03Point").value)
  let stdArea = document.getElementById("stdArea").value
  let stdGroup = document.getElementById("stdGroup").value
  let result = document.getElementById("ex01_result")
  let areaPrefPoint = 0
  let groupPrefPoint = 0

  switch (stdArea) {
    case "areaA":
      areaPrefPoint = 2
      break;
    case "areaB":
      areaPrefPoint = 1
      break;
    case "areaC":
      areaPrefPoint = 0.5
      break;
  }
  switch (stdGroup) {
    case "group01":
      groupPrefPoint = 2.5
      break;
    case "group02":
      groupPrefPoint = 1.5
      break;
    case "group03":
      groupPrefPoint = 1
      break;
  }

  let prefPoint = areaPrefPoint + groupPrefPoint
  let totalPoint = sub01Point + sub02Point + sub03Point + prefPoint
  result.classList.add("alert")
  result.innerHTML = `Tổng điểm: ${totalPoint}`
  result.innerHTML += `<br/>`
  if ((sub01Point !== 0 && sub02Point !== 0 && sub03Point !== 0) && totalPoint >= basePoint) {
    result.innerHTML += `Kết quả: ĐẬU`
  } else {
    result.innerHTML += `Kết quả: TRƯỢT`
    result.innerHTML += `<br/>`
    result.innerHTML += `<i>(Thiếu: ${basePoint - totalPoint} điểm)</i>`
  }
}

// EXERCISE 02
function ex02() {
  const POW01 = 500
  const POW02 = 650
  const POW03 = 850
  const POW04 = 1100
  const POW05 = 1300
  let name = document.getElementById("name")
  let power = parseFloat(document.getElementById("power").value)
  let result = document.getElementById("ex02_result")
  let power01 = 0
  let power02 = 0
  let power03 = 0
  let power04 = 0
  let power05 = 0
  if (power > 350) {
    power01 = 50 * POW01
    power02 = 50 * POW02
    power03 = 100 * POW03
    power04 = 150 * POW04
    power05 = (power - 350) * POW05
  } else if (power > 200) {
    power01 = 50 * POW01
    power02 = 50 * POW02
    power03 = 100 * POW03
    power04 = (power - 200) * POW04
  } else if (power > 100) {
    power01 = 50 * POW01
    power02 = 50 * POW02
    power03 = (power - 100) * POW03
  } else if (power > 50) {
    power01 = 50 * POW01
    power02 = (power - 50) * POW02
  } else {
    power01 = power * POW01
  }
  let total = power01 + power02 + power03 + power04 + power05
  result.classList.add("alert")
  result.innerHTML = `Thành tiền: ${total.toLocaleString("en-US")} ₫`
}