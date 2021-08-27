import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

export const Card = styled.View`
    flex-direction: column;
    padding: 10%;
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    shadow-color: #7f5df0;
    shadow-offset: {width: 0, height: 10};
    shadow-opacity: 0.25;
    shadow-radius: 3.5;
    elevation: 5;
`;
export const Name = styled.Text`
text-align: center;
font-size: 18px;
font-weight: bold;
padding-left: 15px;
padding-right: 15px;
margin-right: 15%
margin-bottom: 15px;
`;
export const DataCols = styled.View`
    margin-top: 15%;
`;

export const ColLeft = styled.View`
    flex-direction: column;
    flex: 1;
    margin-left: -10%;
    margin-top: -10%;
    padding-bottom: 5%
`;
export const ColCenter = styled.View`
    flex-direction: column;
    margin-left: 30%;
    margin-top: -42%;
`;
export const ColRight = styled.View`
    flex-direction: column;
    margin-left: 62%;
    margin-top: -36%;
`;

export const DataText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const MeteorSearch = styled.TextInput`
    flex-direction: row;
    background-color: #fff;
    border-width: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    shadow-color: #7f5df0;
    shadow-offset: {width: 0, height: 10};
    shadow-opacity: 0.25;
    shadow-radius: 3.5;
    elevation: 5;
`;
// Name, ID, Nametype, Class, Mass, Fall, Lat, Long, GeoLocation