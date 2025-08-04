import './App.css'

function App() {
  return (
    <div className="w-64 border rounded-xl shadow p-4 space-y-2 ">
      <img src="https://via.placeholder.com/150" alt="商品圖片" className="rounded-lg" />
      <h2 className="text-lg font-bold">商品名稱</h2>
      <p className="text-gray-600">$999</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
        加入購物車
      </button>
    </div>
  )
}

export default App
