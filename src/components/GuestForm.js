import {
    Box,
    Button,
    Card,
    CardCover, Checkbox,
    FormControl, FormHelperText,
    FormLabel,
    Input, ListItemDecorator,
    Radio,
    RadioGroup,
    Stack,
    Typography
} from "@mui/joy";
import * as React from "react";
import vinylListImage from "../images/vinyl-list-1.jpeg";
import {FormGroup, List, ListItem} from "@mui/material";
import {Apartment, People, Person} from "@mui/icons-material";

function GuestForm() {
    return (
        <Box sx={{mt: '1em'}}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '1.5em'
                }}>
                Анкета гостя
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    mb: '0.5em'
                }}>
                Ваши ответы на вопросы очень помогут нам при организации свадьбы
            </Typography>

            <Box display="flex"
                justifyContent="center"
                alignItems="center"
            sx={{
                pl:2,
                pr:2
            }}>
                <FormGroup sx={{gap: 3}}>
                    <FormGroup>
                        <FormLabel sx={{mb: 1}}>Имя Фамилия</FormLabel>
                        <Input size="lg"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel sx={{mb: 1}}>Присутствие</FormLabel>
                        <FormControl required>
                            <RadioGroup name="presence" size="lg">
                                <Radio value="yes" label="Я приду"/>
                                <Radio value="maybe" label="Скажу ответ позже"/>
                                <Radio value="no" label="Прийти не получится"/>
                            </RadioGroup>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel sx={{mb: 1}}>Есть ли аллергия, диета или особое требование к меню?</FormLabel>
                        <Input size="lg"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel sx={{mb: 1}}>Предпочтения по напиткам</FormLabel>
                        <Stack
                            sx={{gap: 2}}>
                            <Checkbox label="Вино белое" size="lg"/>
                            <Checkbox label="Вино красное" size="lg"/>
                            <Checkbox label="Шампанское" size="lg"/>
                            <Checkbox label="Виски" size="lg"/>
                            <Checkbox label="Водка" size="lg"/>
                            <Checkbox label="Коньяк" size="lg"/>
                        </Stack>
                    </FormGroup>

                    <Button
                        size="lg" color="neutral"
                        type="submit">Отправить</Button>
                </FormGroup>
            </Box>
        </Box>
    );
}

export default GuestForm;