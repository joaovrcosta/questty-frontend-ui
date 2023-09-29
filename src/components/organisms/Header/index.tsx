import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import { SearchInput } from '@/components/atoms/SearchInput'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { Dropdown } from '@/components/molecules/DropdownMenu'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'

export function Header() {
  const { isLoggedIn, user } = useAuthStore()
  const { isOpen, setIsOpen } = useQuestionModalStore()

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.FirstBoxContent>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <S.LogoImage src={logoImg} width={145} height={46} alt="" />
          </Link>
          <SearchInput />
        </S.FirstBoxContent>
        <S.HeaderActionsContainer>
          <S.MakeQuestionButton>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <S.MakeYourQuestionButton
                  border={false}
                  backgroundColor="transparent"
                >
                  PERGUNTAR
                </S.MakeYourQuestionButton>
              </Dialog.Trigger>
              <NewTransactionModal />
            </Dialog.Root>
          </S.MakeQuestionButton>

          {!isLoggedIn && (
            <S.StyledLink href="/signin">
              <S.SignInButton backgroundColor="transparent" border={false}>
                ENTRAR
              </S.SignInButton>
            </S.StyledLink>
          )}

          {!isLoggedIn && (
            <S.StyledLink href="/signup">
              <S.SignUpButton backgroundColor="blue_550">
                CADASTRAR
              </S.SignUpButton>
            </S.StyledLink>
          )}
        </S.HeaderActionsContainer>
        <S.AvatarContainer>
          {isLoggedIn && <Dropdown id={user?.id} />}
        </S.AvatarContainer>
      </S.HeaderContent>
      {!isLoggedIn && (
        <S.SubHeader>
          <S.SubHeaderContent>
            <S.StyledLink href="/signin">
              <S.SubSignInButton backgroundColor="transparent">
                ENTRAR
              </S.SubSignInButton>
            </S.StyledLink>

            <S.StyledLink href="/signin">
              <S.SubSignUpButton backgroundColor="blue_550" color="white">
                CADASTRE-SE JÁ
              </S.SubSignUpButton>
            </S.StyledLink>
          </S.SubHeaderContent>
        </S.SubHeader>
      )}
    </S.HeaderContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tokenJwt = ctx.req.cookies['questty-token']

  console.log(tokenJwt)

  const { login } = useAuthStore()

  if (tokenJwt) {
    try {
      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${tokenJwt}`,
        },
      })

      if (userResponse.status === 200) {
        const user = userResponse.data

        login(user, tokenJwt)
      }
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error)
    }
  }

  return {
    props: {},
  }
}
