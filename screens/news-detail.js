import { Heading, Center, Text, Image } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    const params = route.params.item;
    return (
        <>
            <Header title={"News"} withBack="true" />
            <Image source={{
                uri: params.image
                }} alt="Alternate Text" size="2xl" 
            />
            <Text textAlign={"left"}> {params.date} </Text>
            <Center flex={1} p={"4"}>
                <Heading> {params.title} </Heading>
                <Text textAlign={"center"}> {params.content} </Text>
            </Center>
        </>
    );
};
export default NewsDetail;