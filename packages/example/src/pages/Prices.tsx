import React from 'react'
import { useCoingeckoPrice, useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { AccountButton } from '../components/account/AccountButton'

export function Prices() {
  const etherPrice = useCoingeckoPrice('ethereum', 'usd')
  const WETH_CONTRACT = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  const wethPrice = useCoingeckoTokenPrice(WETH_CONTRACT, 'usd')
  const DONKEY_CONTRACT = '0x4576e6825b462b6916d2a41e187626e9090a92c6'
  const donPrice = useCoingeckoTokenPrice(DONKEY_CONTRACT, 'usd')
  const HARVEST_CONTRACT = '0xa0246c9032bc3a600820415ae600c6388619a14d'
  const farmPrice = useCoingeckoTokenPrice(HARVEST_CONTRACT, 'usd')

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Price</Title>
            <AccountButton />
          </SectionRow>
          <ContentBlock>
            {etherPrice && (
              <ContentRow>
                <Label>Ethereum price:</Label> <Label>$ </Label>
                <TextInline>{etherPrice}</TextInline>
              </ContentRow>
            )}
            {wethPrice && (
              <ContentRow>
                <Label>WETH price:</Label> <Label>$ </Label>
                <TextInline>{wethPrice}</TextInline>
              </ContentRow>
            )}
            {donPrice && (
              <ContentRow>
                <Label>DON price:</Label> <Label>$ </Label>
                <TextInline>{donPrice}</TextInline>
              </ContentRow>
            )}
            {farmPrice && (
              <ContentRow>
                <Label>FARM price:</Label> <Label>$ </Label>
                <TextInline>{farmPrice}</TextInline>
              </ContentRow>
            )}
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
