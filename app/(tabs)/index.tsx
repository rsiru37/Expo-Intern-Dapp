import { Button, ScrollView, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {useEffect, useState} from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { W3mButton } from '@web3modal/wagmi-react-native'
import { useAccount } from 'wagmi'
import { useContractRead } from 'wagmi'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction} from 'wagmi'

export default function TabOneScreen() {
  const [display, setdisplay] = useState(false);
  const [update_display,setupdate_display]=useState(false);
  const [adduser,setdisplayadduser]=useState(false);
  const [age,setage]=useState('');
  const [name,setname]=useState('');
  const [gender,setgender]=useState('');
  const [profiles,setprofiles]=useState('');
  const [arr,setarr]=useState([]);
  const { address, isConnecting, isDisconnected } = useAccount();
  const [id, setid] = useState('');
  const [enable,setenable]=useState(false);
  console.log("Address", address);
  const {data:data1} = useContractRead({
    address: '0x5b30Cd2bb5d4c2aE954b57c8c24cf5db3507C35e',
    abi:[
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "count",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    functionName: 'get',
    chainId:11155111,
    watch:true,
  });

  const { config } = usePrepareContractWrite({
    address: '0x5b30Cd2bb5d4c2aE954b57c8c24cf5db3507C35e',
    abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"count","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    functionName: 'set',
    chainId:11155111
  })
  const { data, write, isLoading, isSuccess, isError, error } = useContractWrite(config)

  const {data:data2, isError:e, error:err} = useContractRead({
    address: '0x0EA02C5AFcC94762934c83eA88D84fbC2aB0dFfc',
    abi:[{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"adduser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"curr_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gas2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gasUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getuser","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"updateuser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_track","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"}],"stateMutability":"view","type":"function"}],
    functionName:'getuser',
    chainId:11155111,
    args:[id],
    enabled:true,
    watch:true
  });

  const {data:curr_id} = useContractRead({
    address: '0x0EA02C5AFcC94762934c83eA88D84fbC2aB0dFfc',
    abi: [{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"adduser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"curr_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gas2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gasUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getuser","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"updateuser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_track","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"}],"stateMutability":"view","type":"function"}],
    functionName:'curr_id',
    chainId:11155111,
    enabled:true,
    watch:true
  });



  const {config:config2} = usePrepareContractWrite({
    address: '0x0EA02C5AFcC94762934c83eA88D84fbC2aB0dFfc',
    abi:[{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"adduser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"curr_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gas2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gasUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getuser","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"internalType":"struct Details.User","name":"_userdetails","type":"tuple"}],"name":"updateuser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_track","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"}],"stateMutability":"view","type":"function"}],
    functionName:'adduser',
    chainId:11155111,
    args:[[0,parseInt(age),name,gender,profiles.split(',')]]
  });
  const {data:d2, write:w2, isLoading:i2, isSuccess:is2, isError:e2, error:err2, reset} = useContractWrite(config2);
  const result = useWaitForTransaction({
    hash: d2?.hash,
  });
  useEffect(() => {if(result.isSuccess){
      setTimeout(() => reset(), 10000)

  }});

  const {config:config3} = usePrepareContractWrite({
    address: '0x0EA02C5AFcC94762934c83eA88D84fbC2aB0dFfc',
    abi:[{"inputs":[{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"name":"adduser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"curr_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getuser","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string[]","name":"profiles","type":"string[]"}],"name":"updateuser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_track","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"gender","type":"string"}],"stateMutability":"view","type":"function"}],
    functionName:'updateuser',
    chainId:11155111,
    args:[[id, parseInt(age),name,gender,profiles.split(',')]]
  });
  const {data:d3, write:w3, isLoading:i3, isSuccess:is3, isError:e3, error:err3} = useContractWrite(config3);
  const result2 = useWaitForTransaction({
    hash: d3?.hash,
  });
  useEffect(() => {if(result2.isSuccess){
      setTimeout(() => reset(), 10000)

  }});


  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <W3mButton balance='show'/>
      { address && (
        <View>
          <Text>Address : {address}</Text>
        </View>
      )}
      {/* <Button title="Get the Value" onPress={handleget}></Button> */}
      { address &&  (
        <View>
          <Text>Data : {parseInt(data1)}</Text>
        </View>
      ) }
      <Button title="SET" onPress={() => write?.()} disabled={isLoading} ></Button>
      { isLoading && (<View><Text> LOADING ...</Text></View>)}
      { isSuccess && (<View>
        <Text> TRANSACTION SUCCESSFUL!</Text>
        <Text> Tx Hash : {JSON.stringify(data?.hash)}</Text>
        </View>)}
      { isError && (<View><Text> Something is Wrong : {JSON.stringify(error?.details)} </Text></View>)}

      <View style={styles2.container}>
        <View style={{ flexDirection:'row'}}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          placeholder="Enter User ID"
          keyboardType="numeric"
          onChangeText={(text) => setid(text) }/>
        <Button title="Get Details" disabled={id=='0' || id==''} onPress={() => {setdisplay(true); setupdate_display(false)}}></Button>
        </View>
        { e && display && (<View><Text> ERROR: {JSON.stringify(err.shortMessage)}</Text></View>)}
        {display && !e && !update_display && (
          <View>
            <Text>NAME : {data2?.[1]}</Text>
            <Text>AGE : {parseInt(data2?.[0])}</Text>
            <Text>GENDER : {data2?.[2]}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>JOB PROFILES : </Text>
            {data2?.[3].map((element, index) => (
              <Text key={index}>{element}   </Text>
            ))}
            </View>
            <Button title="Update Details" onPress={() => {setupdate_display(true)}}></Button>
          </View>
        )}
        {display && !e && update_display && (
          <View>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="NAME" onChangeText={name => setname(name)} value={name}></TextInput>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="AGE" onChangeText={age => setage(age)} value={age} keyboardType="numeric"></TextInput>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="GENDER" onChangeText={gender => setgender(gender)} value={gender}></TextInput>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="PROFILES in Array" onChangeText={profiles => setprofiles(profiles)} value={profiles}></TextInput>
            <Button title="UPDATE USER" disabled={age=='0'|| age=='' || name==''}onPress={() => {w3?.()}} ></Button>
            {i3 && (<Text> LOADING ... </Text>)}
            {result2.isSuccess && (<Text> USER UPDATED SUCCESSFULLY! </Text>) }
            {e3 && (<Text>ERROR : {JSON.stringify(err3?.details)}</Text>)}
          </View>

        )}
    </View>

    <View style={styles2.container}>
    <Button title="Create New User" onPress={() => {setdisplayadduser(!adduser)}}></Button>
    {adduser && (
      <View>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="NAME" onChangeText={name => setname(name)} value={name}></TextInput>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="AGE" onChangeText={age => setage(age)} value={age} keyboardType="numeric"></TextInput>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="GENDER" onChangeText={gender => setgender(gender)} value={gender}></TextInput>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="PROFILES in Array" onChangeText={profiles => setprofiles(profiles)} value={profiles}></TextInput>
        <Button title="ADD USER" onPress={() => {w2?.()}} disabled={age=='0' || name==''}></Button>
        {i2 && (<Text>LOADING ...</Text>)}
        {result.isSuccess && (<Text> USER CREATED SUCCESSFULLY! YOUR ID is : {parseInt(curr_id)}</Text>)}
        {e2 && (<Text>{JSON.stringify(err2.details)}</Text>)}
      </View>
    )}
    </View>
    </View>
    </ScrollView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const styles2 = StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:50,
  },
  button: {
    height: 40,
    marginLeft: 5
}});
