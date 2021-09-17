import { useTranslation } from 'react-i18next';
import ScreenTitle from '../components/titles/ScreenTitle';
import { Box, createStyles, makeStyles, Slide, Theme } from '@material-ui/core';
import React from 'react';
import { defaultTimeout } from '../constants/animations';
import SkillItem from '../components/skill/SkillItem';
import mySkills from '../constants/mySkills';

const Skills = () => {
  const { t } = useTranslation();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 100,
      },
      leftContainer: {
        maxWidth: '35%',
      },
      mySkillsContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 100,
        width: '100%',
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.leftContainer}>
          <ScreenTitle
            title={"Let's Work Together"}
            subTitle="Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
            noDivider
          />
        </Box>
        <Slide in direction="left" timeout={defaultTimeout}>
          <Box className={classes.mySkillsContainer}>
            {mySkills.map((globalSkill) => (
              <Box key={globalSkill.name}>
                <SkillItem
                  label={globalSkill.name}
                  value={globalSkill.level}
                  isGlobalSkill
                />
                {globalSkill.skills.map((skill) => (
                  <Box key={skill.name}>
                    <SkillItem label={skill.name} value={skill.level} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Slide>
      </Box>
    </>
  );
};

export default Skills;
