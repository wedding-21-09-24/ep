import {Box, Button, Checkbox, FormControl, Input, Radio, RadioGroup, Stack, Typography} from "@mui/joy";
import * as React from "react";
import {useState} from "react";
import {FormGroup} from "@mui/material";

function GuestForm() {
    const [formIsHidden, setFormIsHidden] = useState(false);
    const [fullName, setFullName] = useState('');
    const [presence, setPresence] = useState('');
    const [allergy, setAllergy] = useState('');
    const [whiteWine, setWhiteWine] = useState(false);
    const [redWine, setRedWine] = useState(false);
    const [champagne, setChampagne] = useState(false);
    const [vodka, setVodka] = useState(false);
    const [whiskey, setWhiskey] = useState(false);
    const [cognac, setCognac] = useState(false);
    const [noAlcohol, setNoAlcohol] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setFullName('');
        setPresence('');
        setAllergy('');
        setWhiteWine(false);
        setRedWine(false);
        setChampagne(false);
        setVodka(false);
        setWhiskey(false);
        setCognac(false);
        setNoAlcohol(false);
        setFormIsHidden(true)

        const googleFormUrl = prepareGoogleFormUrl();
        fetch(googleFormUrl, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }

    function prepareGoogleFormUrl() {
        const fullNameFormatted = fullName.replaceAll(" ", "+");
        const allergyFormatted = allergy.replaceAll(" ", "+");
        const drinks = appendDrinkChoose()
        return `https://docs.google.com/forms/d/e/1FAIpQLSdlKhrxSktxrxrvmslmP8MeeXEXkPtbAgTPM9Fdh8RzHAvpIQ/formResponse?&submit=Submit?usp=pp_url&entry.1453880769=${fullNameFormatted}&entry.1908531472=${presence}&entry.470484814=${allergyFormatted}${drinks}`
    }

    function appendDrinkChoose() {
        const drinksAnswer = new Map()
        drinksAnswer.set("Белое+вино", whiteWine);
        drinksAnswer.set("Красное+вино", redWine);
        drinksAnswer.set("Шампанское", champagne);
        drinksAnswer.set("Водка", vodka);
        drinksAnswer.set("Виски", whiskey);
        drinksAnswer.set("Коньяк", cognac);
        drinksAnswer.set("Б/А+напитки", noAlcohol);

        let result = "";
        drinksAnswer.forEach((answer, drink) => {
            if (answer) {
                result = result + `&entry.1322127710=${drink}`
            }
        })

        return result;
    }

    const repeatVote = () => {
        setFormIsHidden(false);
    };

    return (
        <Box sx={{
            ml: '32px',
            mr: '32px',
            mt: '40px'
        }}>
            <Typography variant="headerText">
                Анкета гостя
            </Typography>
            <Typography variant="regularText">
                Ваши ответы на вопросы очень помогут нам при организации свадьбы
            </Typography>
            <form onSubmit={handleSubmit} hidden={formIsHidden}>
                <Box display="flex"
                     justifyContent="center"
                     alignItems="center"
                >
                    <FormGroup sx={{
                        mt: '20px',
                        gap: 5,
                        width: '100%'
                    }}>
                        <FormGroup>
                            <Typography variant="regularText"
                                        sx={{
                                            textAlign: "left"
                                        }}>Имя Фамилия</Typography>
                            <Input value={fullName}
                                   onInput={e => setFullName(e.target.value)}
                                   size="lg"
                            sx={{
                                // borderColor="black"
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Typography variant="regularText"
                                        sx={{
                                            textAlign: "left"
                                        }}>Присутствие</Typography>
                            <FormControl>
                                <RadioGroup
                                    value={presence}
                                    onChange={e => setPresence(e.target.value)}
                                    size="lg">
                                    <Radio value="Да" label="Я приду"/>
                                    <Radio value="Скажу+ответ+позже" label="Скажу ответ позже"/>
                                    <Radio value="Прийти+не+получится" label="Прийти не получится"/>
                                </RadioGroup>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Typography variant="regularText"
                                        sx={{
                                            textAlign: "left"
                                        }}>Есть ли аллергия, диета или особое требование к меню?</Typography>
                            <Input value={allergy}
                                   onInput={e => setAllergy(e.target.value)}
                                   size="lg"/>
                        </FormGroup>
                        <FormGroup>
                            <Typography variant="regularText"
                                        sx={{
                                            textAlign: "left"
                                        }}>Предпочтения по напиткам</Typography>
                            <Stack
                                sx={{gap: 2}}>
                                <Checkbox label="Вино белое"
                                          checked={whiteWine}
                                          onChange={e => setWhiteWine(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Вино красное"
                                          checked={redWine}
                                          onChange={e => setRedWine(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Шампанское"
                                          checked={champagne}
                                          onChange={e => setChampagne(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Виски"
                                          checked={whiskey}
                                          onChange={e => setWhiskey(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Водка"
                                          checked={vodka}
                                          onChange={e => setVodka(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Коньяк"
                                          checked={cognac}
                                          onChange={e => setCognac(e.target.checked)}
                                          size="lg"/>
                                <Checkbox label="Б/А напитки"
                                          checked={noAlcohol}
                                          onChange={e => setNoAlcohol(e.target.checked)}
                                          size="lg"/>
                            </Stack>
                        </FormGroup>

                        <Button
                            sx={{
                                backgroundColor: 'black',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                            }}
                            size="lg" color="neutral"
                            type="submit">Отправить</Button>
                    </FormGroup>
                </Box>
            </form>
            <Box hidden={!formIsHidden}>
                <Typography variant="headerText">
                    Спасибо за ответы!
                </Typography>
                <Button
                    onClick={repeatVote}
                    size="lg" color="neutral"
                    sx={{
                        width: '100%',
                        backgroundColor: 'black',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}>Заполнить анкету ещё раз</Button>
            </Box>
        </Box>
    );
}

export default GuestForm;