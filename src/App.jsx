import { useState } from 'react'
import InputBox from './commponant/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

   const swap = () =>{
    setFrom(to)
    setTo(from)
     to(from)
     from(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }
   const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
   }


  return (
    <div className='w-full h-screen flex flex-wrap     justify-center items-center bg-cover bg-repeat'style={{backgroundColor:'gray'}}>
      <div className='w-full '>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg
        p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) =>{
            e.preventDefault();
            convert();
          }}> 
            <div className='w-full mb-1 '>
              <InputBox
              label="From"
              amount={amount}
              currencyOputions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              ></InputBox>
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4 '>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOputions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              >
              </InputBox>
            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounden-lg'>
              Convert{from.toUpperCase()}To {to.toUpperCase()}</button>

          </form>
        </div>
      </div>
    
    </div>
  )
}

export default App;
