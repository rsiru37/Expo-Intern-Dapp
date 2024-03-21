import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum, sepolia, goerli} from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import { ReactNode } from 'react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '6e460449aaf08ef8388ee11ac4e3ce00'

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum, sepolia, goerli]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  defaultChain: sepolia
})

export default function ProviderWeb3Model({children}:{children: ReactNode}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
      <Web3Modal />
    </WagmiConfig>
  )
}