import {Box, Button, Checkbox, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Typography} from "@mui/joy";
import * as React from "react";
import {FormGroup} from "@mui/material";

function GuestForm() {
    return (
        <Box sx={{
            m: '1em',
            mt: '3em'
        }}>
            <Typography
                sx={{
                    fontSize: '1.5em',
                    mb: '0.25em'
                }}>
                Анкета гостя
            </Typography>
            <Typography
                sx={{
                    mb: '1em'
                }}>
                Ваши ответы на вопросы очень помогут нам при организации свадьбы
            </Typography>

            <Box display="flex"
                justifyContent="center"
                alignItems="center"
            >
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