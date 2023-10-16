import React, { useState ,useContext } from 'react';
import styled from 'styled-components';
import { AppBar, Button, InputBase, Toolbar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Podcast from './Podcast';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import SearchPage from './searchPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch , faHouse} from '@fortawesome/free-solid-svg-icons';
import "./Header.css";



const Header = () => {

  const { user } = useContext(UserContext);
  const {setSearchItem } = useContext(UserContext);
  const { isLogin,setAuthrise } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [changeValue , setChangeValue] = useState('');


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const Logoutfun =() =>{
    setAuthrise(false);
}
 
  const handleChange =() =>{
    setSearchItem(changeValue);
    setChangeValue('');
}
  
 

  return (
    <React.Fragment>
      <AppBar>
      <div className='nav1'>
  <MusicNoteIcon to="/" />
  
  <Link to="/"><NavItem>Wynk Music App</NavItem></Link>
  <div className="searchbox">
    <input
      type="text"
      placeholder="Search..."
      value={changeValue}
      onChange={(e) => setChangeValue(e.target.value)}
      
    />
    <Link to="/search/song">
      <button
        className='text-white mx-2 mt-2'
        onClick={handleChange}
       
      >
        Search
      </button>
    </Link>
  </div>
  <div className="navbar-links">
  <Link to="/favourite" className="navbar-link">
      <NavItem variant="contained">Favourite</NavItem>
    </Link>
    <Link to="/managesubscription" className="navbar-link">
      <NavItem variant="contained">Manage Subscription</NavItem>
    </Link>
    <Link className="navbar-link">
      <NavItem variant="contained" onClick={Logoutfun}>LogOut</NavItem>
    </Link>
  </div>
</div>

        <Nav>
        <Link to="/"><NavItem href="#All">All</NavItem></Link>
        <Link to="/podcast"><NavItem href="#TrendingNow">Trending Now</NavItem></Link>
        <Link to="/podcast"><NavItem href="#OldSongs">Old Songs</NavItem></Link>
        <Link to="/podcast"><NavItem href="#NewSongs">New Songs</NavItem></Link>
          <DropdownNavItem onClick={toggleDropdown}>
           <NavItem href="#Mood&Genre">Moods & Genre <ArrowDropDownIcon/></NavItem>
            {isDropdownOpen && (
              <DropdownContent>
                <DropdownItem href="#PartySongs">Party Songs</DropdownItem>
                <DropdownItem href="#DanceSongs">Dance Songs</DropdownItem>
                <DropdownItem href="#BollywoodSongs">Bollywood Songs</DropdownItem>
                <DropdownItem href="#RomanticSongs">Romantic Songs</DropdownItem>
                <DropdownItem href="#90'sHits">90's Hits</DropdownItem>
                <DropdownItem href="#Ghazals">Ghazals</DropdownItem>
                <DropdownItem href="#BhaktiSongs">Bhakti Songs</DropdownItem>
                <DropdownItem href="#LoFISongs">LoFI Songs</DropdownItem>
              </DropdownContent>
            )}
          </DropdownNavItem>
          <DropdownNavItem onClick={toggleDropdown}>
             <NavItem href="#TopAlbums">Top Albums <ArrowDropDownIcon sx={{ marginBottom: '0px' }}/></NavItem>
            {isDropdownOpen && (
              <DropdownContent>
                <DropdownItem href="#TopHindiAlbums">Top Hindi Albums</DropdownItem>
                <DropdownItem href="#TopEnglishAlbums">Top English Albums</DropdownItem>
                <DropdownItem href="#TopEnglishAlbums">Top English Albums</DropdownItem>
                <DropdownItem href="#TopTamilAlbums">Top Tamil Albums</DropdownItem>
                <DropdownItem href="#TopBhojpuriAlbums">Top Bhojpuri Albums</DropdownItem>
               
              </DropdownContent>
            )}
          </DropdownNavItem>
          
          <Link to="/podcast"><NavItem href="#TopArtist">Top Artist</NavItem></Link>

          <DropdownNavItem onClick={toggleDropdown}>
          <NavItem href="#TopPlaylists">Top Playlists <ArrowDropDownIcon /></NavItem>
            {isDropdownOpen && (
              <DropdownContent>
                <DropdownItem href="#WynkTop100Songs">Wynk Top 100 Songs</DropdownItem>
                <DropdownItem href="#TrendingHindiSongs">Trending Hindi Songs</DropdownItem>
                <DropdownItem href="#TopEnglishSongs">Top English Songs</DropdownItem>
                <DropdownItem href="#TrendingReelsSongs">Trending Reels Songs</DropdownItem>
                <DropdownItem href="#TopRomanticHits">Top Romantic Hits</DropdownItem>
                
               
              </DropdownContent>
            )}
          </DropdownNavItem>
          
          <Link to="/podcast"><NavItem>Podcast</NavItem></Link>
        </Nav>
      </AppBar>
    </React.Fragment>
  );
};

const Nav = styled.nav`
  background-color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  
`;
 


const NavItem = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const DropdownContent = styled.div`
  background-color: white; // Set the background color to white
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownNavItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ${DropdownContent} {
    display: block;
  }
`;


const DropdownItem = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;


const SearchContainer = styled.div`
  background-color: white;
  padding: 0 10px;
  border-radius: 50px;
  width: 15%;
  margin-left: 50%; 
  display: flex;
  align-items: center;

 
`;
const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  background-color: #1c1c1c;
`;



export default Header;