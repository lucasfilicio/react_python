import React , {useEffect, useState} from 'react';
import { produtos } from '../produtos';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addProduct,
  removeProduct,
} from '../slices/productSlice';


export default function BasicTextFields() {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.productStore)
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const buscarItem = (e)=>{
    const resultado = produtos.filter((produto)=>produto.nome.includes(e.toString()))
    if(resultado.length > 0){
      dispatch(addProduct(resultado[0]))
    }
    console.log(resultado)
    
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField 
        id="outlined-basic"
        label="Item"
        variant="outlined" 
        value = {item}
        onChange = {(e)=> setItem(e.target.value)}
        onBlur = {(e)=> buscarItem(e.target.value)}
        />

    <TextField 
        id="outlined-basic"
        label="Quantidade"
        variant="outlined"
        value = {quantidade} />
        {
          item ?
          <h4>{item.nome}</h4>
          :
          <h4></h4>
        }
    </Box>

  );
}