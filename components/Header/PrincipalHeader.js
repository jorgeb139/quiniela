import Link from "next/link"
import Image from "next/image"
import styles from "./styles"
import { useState } from "react"
import { useRouter } from "next/router"
import MenuItems from "../../utils/MenuItems"
import Grid from "@mui/material/Unstable_Grid2"
import { Box } from "@mui/system"

export default function PrincipalHeader({ userName }) {
  const [menuActive, setMenuActive] = useState(false)
  const router = useRouter()

  return (
    <>
      <header>
        <div
          className={menuActive ? "whiteOpacityActive" : "whiteOpacityInactive"}
        ></div>
        <Box
          sx={{
            flexGrow: 1,
            backgroundImage: "url('/img/horizontalMenuBG.jpg')",
            height: { md: "230px", xs: "50" },
            boxShadow: "0 5px 50px rgba(0,0,0,0.3)",
          }}
        >
          <Grid container item xs={12} paddingTop={2} justifyContent="center">
            <Grid
              container
              xs={12}
              sx={{ justifyContent: { md: "center", xs: "none" } }}
            >
              <Link href="/principal">
                <a>
                  <Image
                    src={"/img/Qatar2022_blanco.png"}
                    height={90}
                    width={90}
                    alt="Copa Mundial"
                  />
                </a>
              </Link>
            </Grid>
            <Grid
              item
              container
              xs={12}
              backgroundColor="#00000044"
              justifyContent="Center"
              alignItems="center"
              marginTop="20px"
              // height="100px"
              sx={{ height: { md: "100px", sm: "0px" } }}
            >
              <div>
                <Grid item xs={10} md={12}>
                  <div className="menu">
                    <nav
                      className={`navMenu ${
                        menuActive ? "navActive" : "navInactive"
                      }`}
                    >
                      <div className="logoMobile">
                        <Link href="/principal">
                          <a>
                            <Image
                              src={"/img/Qatar2022_blanco.png"}
                              height={90}
                              width={90}
                              alt="Copa Mundial"
                              className="logoImageMobile"
                            />
                          </a>
                        </Link>
                      </div>
                      <ul>
                        {MenuItems.map((menuItem) => {
                          const { menuTitle, pageURL } = menuItem
                          return (
                            <li key={menuTitle}>
                              <Link href={pageURL}>
                                <a
                                  id={
                                    router.pathname === pageURL
                                      ? "selected"
                                      : ""
                                  }
                                  data-replace={menuTitle}
                                >
                                  {menuTitle}
                                </a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                </Grid>
                <Grid item xs={2} sx={{ display: { xl: "none", md: "flex" } }}>
                  <div
                    className="bars__menu"
                    onClick={() => setMenuActive(!menuActive)}
                  >
                    <span className={menuActive ? "spanActive" : ""} />
                    <span className={menuActive ? "spanActive" : ""} />
                    <span className={menuActive ? "spanActive" : ""} />
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div className="containerMenu"></div>
      </header>

      <style jsx>{styles}</style>
    </>
  )
}
