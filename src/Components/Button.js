import React,{useState,useEffect} from "react";
import styled from "styled-components";

const Wrapper=styled.div`
      display:flex;
      justify-content:space-between;
      
      @media(max-width:900px){
        flex-direction:column;
      }
      
      `
const SegmentWrapper=styled.div`
   display:${(props)=>props.display};
   float:right;

   @media(max-width:900px){
     margin:20px;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
   }
`
const Head=styled.h1`
   width:200px;
   background-color:gray;
   padding:10px;
   margin:20px;
   transition:0.5 ease;
   color:white;
   &:hover{
    border-radius:10px;
   }`

const Table=styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin-left:20px;
  
  @media(max-width:400px){
    display:flex;
    flex-direction:column;
    width:200px;
  }
  `
  

const Tr=styled.tr`
background-color: #ddd;
border:2px solid;
`;
const Th=styled.th`
border: 1px solid #dddd;
text-align: left;
padding: 8px;`
const Td=styled.td`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;`;

const SegWrapper=styled.div`
   width:20rem;
   height:100%;
   background-color:gray;
   border:2px solid black;
   display:flex;
   flex-direction:column;
   padding:30px;
   color:white;

   `;

const SegHeader=styled.h1`
padding:20px;
background-color:#3299a8;
margin:0;
width:21.5rem;
color:white;
border:2px solid gray;
`

const Section1=styled.div``;
const Header=styled.h2`
`;

const HeaderName=styled.input`
  padding:10px;`;

const HeaderDesc=styled.h5``;

const Section2=styled.div`
display:flex;
flex-direction:column;
`;

const Traits=styled.input`
margin:10px;
padding:10px;
border:1px solid black;
box-shadow:5px 5px 5px 3px black;

&:active{
    box-shadow:0px 0px 2px blue;
    border:2px;

}
`;

const Select=styled.select`
margin:10px;
padding:20px;
border:4px solid #fff
box-shadow:10px 10px black;
background-color:white;
`;

const Option=styled.option`
padding:10px;
margin:10px;`;

const AddButton=styled.button`
margin:10px;
background-color:#32a877;
color:white;
border:2px solid white;
height:40px;
cursor:pointer;
width:50%;
border-radius:0px 30px;

@media(max-width)
`
const Section3=styled.div`
    margin-top:20px;
    display:flex;
    justify-content:space-around;
    `;

const BottomBut=styled.button`
  padding:8px;
  border:2px solid white;
  cursor:pointer;
  border-radius:10px;
  background-color:${props=>props.type==="submit"?"#32a2a8":"red"};
  color:white;
  
  
  &:hover{
    
  }
  `

function Button(){

    const [display,setdisplay]=useState("none");
    const handleClick=()=>{
        console.log("button Clicked..");
        setdisplay(
            display==="none"?"block":"none"
        )
    }
    const [table,setTable]=useState([]);

    useEffect(()=>{
       let retrievedData=JSON.parse(localStorage.getItem("userData"));
       console.log(retrievedData);
       if(retrievedData===null){
        setTable(null);
       }else{
        setTable(retrievedData);
       }
    },[]);
         const selections=
         [{Label:"First_Name",Value:"first_name"},
         {Label:"Last_Name",Value:"last_name"},
         {Label:"Gender",Value:"gender"},
         {Label:"Age",Value:"age"},
         {Label:"Account_Name",Value:"account_name"},
         {Label:"City",Value:"City"},
         {Label:"State",Value:"state"}];
         
    
        const [selects,setSelect]=useState();
        const [TraitsArr,setTraitsArr]=useState([]);
        const [SelectArr,setSelectArr]=useState(selections);
        const [SegmentName,setSegmentName]=useState("");
        const [FinalTraits,setFinalTraits]=useState([
            {First_Name:""},
            {Last_Name:""},
            {Gender:""},
            {Age:""},
            {Account_Name:""},
            {City:""},
            {State:""},
    
        ]);
    
        
         const handleTraits=(e)=>{
            console.log(e.target.value);
            if(e.target.placeholder==="First_Name")FinalTraits[0].First_Name=e.target.value;
            if(e.target.placeholder==="Last_Name")FinalTraits[1].Last_Name=e.target.value;
            if(e.target.placeholder==="Gender")FinalTraits[2].Gender=e.target.value;
            if(e.target.placeholder==="Age")FinalTraits[3].Age=e.target.value;
            if(e.target.placeholder==="Account_Name")FinalTraits[4].Account_Name=e.target.value;
            if(e.target.placeholder==="City")FinalTraits[5].City=e.target.value;
            if(e.target.placeholder==="State")FinalTraits[6].State=e.target.value;
            let temp=[...FinalTraits]
            setFinalTraits(temp);
            console.log(FinalTraits);
         }
    
         const handleSelect=()=>{
            let temp=[...TraitsArr,selects];
            let unique=temp.filter((v,i,a)=>a.indexOf(v)===i);
            setTraitsArr(unique);
            let temp1=[...SelectArr];
            let temp2=temp1.filter(sel=>sel.Label!==selects);
            setSelectArr(temp2);
         }
         const handleSubmit=(e)=>{
            e.preventDefault();

            let save={
                "segment_name":SegmentName,
                "schemas":[...FinalTraits]
            }
             let temp=localStorage.getItem("userData");
             console.log(temp)
             if(temp===null){
                localStorage.setItem("userData",JSON.stringify([save]));
             }else{
                let temp1=JSON.parse(temp);
                let temp2=[...temp1,save];
                localStorage.setItem("userData",JSON.stringify(temp2));

             }    
            window.location.reload(false);
            
         }
       
        return(
            <>
            <Wrapper>
                <div>
            <Head onClick={handleClick}>Save Segment</Head>
                <Table>
                    <thead>
                    <Tr>
                        <Th>Segment Name</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Gender</Th>
                        <Th>Age</Th>
                        <Th>Account Name</Th>
                        <Th>City</Th>
                        <Th>State</Th>
                    </Tr>
                    </thead>
                    <tbody>
                    {table.map((tab)=>{
                            return(
                                <Tr key={tab.segment_name} >
                                   <Td>{tab.segment_name}</Td>
                                   <Td>{tab.schemas[0].First_Name}</Td>
                                   <Td>{tab.schemas[1].Last_Name}</Td>
                                   <Td>{tab.schemas[2].Gender}</Td>
                                   <Td>{tab.schemas[3].Age}</Td>
                                   <Td>{tab.schemas[4].Account_Name}</Td>
                                   <Td>{tab.schemas[5].City}</Td>
                                   <Td>{tab.schemas[6].State}</Td>
                                </Tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
                </div>
            <SegmentWrapper display={display}>
            <SegHeader>Saving Segment</SegHeader>  
            <SegWrapper>
          
                <Section1>
                <Header>Enter the Name of the Segment</Header>
                <HeaderName type="text" placeholder="Name of the segment" value={SegmentName} onChange={e=>setSegmentName(e.target.value)}/>
                <HeaderDesc>To Save your segment, you need to add the schemas to build the query.</HeaderDesc>
                </Section1>
                <Section2>
                     {TraitsArr.map(traits=><Traits type="text" key={traits} placeholder={traits} value={FinalTraits.traits} 
                     onChange={(e)=>handleTraits(e)}></Traits>)}
                     <Select onChange={(e)=>setSelect(e.target.value)}>
                        <Option>Select Traits</Option>
                       {SelectArr.map(sel=><Option key={sel.Value} value={sel.Label}>{sel.Label}</Option>)}
                     </Select>
                     <AddButton onClick={handleSelect}>Add Traits</AddButton>
                     
                </Section2>
                <Section3>
                    <BottomBut type="submit" onClick={handleSubmit}>Save the Segment</BottomBut>
                    <BottomBut onClick={handleClick}>Cancel</BottomBut>
                </Section3>            
            </SegWrapper>
            </SegmentWrapper>
            </Wrapper>
            </>

        
        )
}



export default Button;
