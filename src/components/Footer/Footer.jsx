import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Row className='h-100'>
          <Col className={styles.footerContainerLeft}>
            <h2>Dogs leave paw prints in our Hearts ❤️</h2>
            <p>Group 1 Copyright 2022</p>
          </Col>
          <Col className={styles.footerContainerMiddle}>
            <h5>Check our social Media</h5>
            <ul className={styles.sosmedUl}>
              <li>
                <a href='https://www.facebook.com/coksedana' target='_blank'>
                  <FacebookIcon /> Facebook
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/cok_yoga' target='_blank'>
                  <InstagramIcon /> Instagram
                </a>
              </li>
            </ul>
          </Col>
          <Col className={styles.footerContainerRight}>
            <h5>Find us at</h5>
            <img
              src='/images/example-map.png'
              alt='map-example'
              className={styles.dummyMap}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function FacebookIcon() {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='14' cy='14' r='12.25' fill='url(#paint0_linear_250_1543)' />
      <path
        d='M18.562 17.7464L19.1061 14.2888H15.7021V12.0461C15.7021 11.1 16.1767 10.1772 17.7014 10.1772H19.25V7.23362C19.25 7.23362 17.8452 7 16.5027 7C13.698 7 11.8665 8.65632 11.8665 11.6536V14.2888H8.75V17.7464H11.8665V26.1052C12.4921 26.201 13.1322 26.25 13.7843 26.25C14.4363 26.25 15.0764 26.201 15.7021 26.1052V17.7464H18.562Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_250_1543'
          x1='14'
          y1='1.75'
          x2='14'
          y2='26.1773'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#18ACFE' />
          <stop offset='1' stopColor='#0163E0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='1.75'
        y='1.75'
        width='24.5'
        height='24.5'
        rx='6'
        fill='url(#paint0_radial_250_1546)'
      />
      <rect
        x='1.75'
        y='1.75'
        width='24.5'
        height='24.5'
        rx='6'
        fill='url(#paint1_radial_250_1546)'
      />
      <rect
        x='1.75'
        y='1.75'
        width='24.5'
        height='24.5'
        rx='6'
        fill='url(#paint2_radial_250_1546)'
      />
      <path
        d='M20.125 9.1875C20.125 9.91237 19.5374 10.5 18.8125 10.5C18.0876 10.5 17.5 9.91237 17.5 9.1875C17.5 8.46263 18.0876 7.875 18.8125 7.875C19.5374 7.875 20.125 8.46263 20.125 9.1875Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14 18.375C16.4162 18.375 18.375 16.4162 18.375 14C18.375 11.5838 16.4162 9.625 14 9.625C11.5838 9.625 9.625 11.5838 9.625 14C9.625 16.4162 11.5838 18.375 14 18.375ZM14 16.625C15.4497 16.625 16.625 15.4497 16.625 14C16.625 12.5503 15.4497 11.375 14 11.375C12.5503 11.375 11.375 12.5503 11.375 14C11.375 15.4497 12.5503 16.625 14 16.625Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.25 13.65C5.25 10.7097 5.25 9.23959 5.82222 8.11655C6.32555 7.1287 7.1287 6.32555 8.11655 5.82222C9.23959 5.25 10.7097 5.25 13.65 5.25H14.35C17.2903 5.25 18.7604 5.25 19.8835 5.82222C20.8713 6.32555 21.6744 7.1287 22.1778 8.11655C22.75 9.23959 22.75 10.7097 22.75 13.65V14.35C22.75 17.2903 22.75 18.7604 22.1778 19.8835C21.6744 20.8713 20.8713 21.6744 19.8835 22.1778C18.7604 22.75 17.2903 22.75 14.35 22.75H13.65C10.7097 22.75 9.23959 22.75 8.11655 22.1778C7.1287 21.6744 6.32555 20.8713 5.82222 19.8835C5.25 18.7604 5.25 17.2903 5.25 14.35V13.65ZM13.65 7H14.35C15.849 7 16.868 7.00136 17.6557 7.06572C18.4229 7.1284 18.8153 7.24202 19.089 7.38148C19.7475 7.71703 20.283 8.25247 20.6185 8.91103C20.758 9.18473 20.8716 9.57709 20.9343 10.3443C20.9986 11.132 21 12.151 21 13.65V14.35C21 15.849 20.9986 16.868 20.9343 17.6557C20.8716 18.4229 20.758 18.8153 20.6185 19.089C20.283 19.7475 19.7475 20.283 19.089 20.6185C18.8153 20.758 18.4229 20.8716 17.6557 20.9343C16.868 20.9986 15.849 21 14.35 21H13.65C12.151 21 11.132 20.9986 10.3443 20.9343C9.57709 20.8716 9.18473 20.758 8.91103 20.6185C8.25247 20.283 7.71703 19.7475 7.38148 19.089C7.24202 18.8153 7.1284 18.4229 7.06572 17.6557C7.00136 16.868 7 15.849 7 14.35V13.65C7 12.151 7.00136 11.132 7.06572 10.3443C7.1284 9.57709 7.24202 9.18473 7.38148 8.91103C7.71703 8.25247 8.25247 7.71703 8.91103 7.38148C9.18473 7.24202 9.57709 7.1284 10.3443 7.06572C11.132 7.00136 12.151 7 13.65 7Z'
        fill='white'
      />
      <defs>
        <radialGradient
          id='paint0_radial_250_1546'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(10.5 20.125) rotate(-55.3758) scale(22.3297)'>
          <stop stopColor='#B13589' />
          <stop offset='0.79309' stopColor='#C62F94' />
          <stop offset='1' stopColor='#8A3AC8' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_250_1546'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(9.625 27.125) rotate(-65.1363) scale(19.77)'>
          <stop stopColor='#E0E8B7' />
          <stop offset='0.444662' stopColor='#FB8A2E' />
          <stop offset='0.71474' stopColor='#E2425C' />
          <stop offset='1' stopColor='#E2425C' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial_250_1546'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(0.437501 2.625) rotate(-8.1301) scale(34.0295 7.27856)'>
          <stop offset='0.156701' stopColor='#406ADC' />
          <stop offset='0.467799' stopColor='#6A45BE' />
          <stop offset='1' stopColor='#6A45BE' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default Footer
